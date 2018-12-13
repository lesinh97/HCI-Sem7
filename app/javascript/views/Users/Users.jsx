import React, { Component } from 'react';
import {
    Grid, Row, Col,
    Table,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';
import axios from 'axios';
// react component that creates a switch button that changes from on to off mode
import Switch from 'react-bootstrap-switch';

import Card from 'components/Card/Card.jsx';

import Button from 'elements/CustomButton/CustomButton.jsx';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_list: [],
        };
    }
    componentDidMount() {
        axios.get('http://localhost:3001/users/').then(res => {
            this.setState({ user_list: res.data });
        });
    }
    onDelete = (id) => {
        axios.delete('http://localhost:3001/users/' + id).then(res => {
            axios.get('http://localhost:3001/users/').then(res => {
                this.setState({ user_list: res.data });
            })
    })
}
render() {
    const view = (
        <Tooltip id="view">View Profile</Tooltip>
        );
    const edit = (
        <Tooltip id="edit">Edit Profile</Tooltip>
        );
    const remove = (
        <Tooltip id="remove">Remove</Tooltip>
        );
    return (
        <div className="main-content">
        <Grid fluid>
        <Row>
        <Col md={13}>
        <Card
        title="Quản lý người dùng"
        category="Trung tâm ngoại ngữ Lê Xinh"
        tableFullWidth
        content={
            <Table responsive>
            <thead>
            <tr>
            <th className="text-center">#</th>
            <th className="text-center">Name</th>
            <th className="text-center">Role</th>
            <th className="text-center">Email</th>
            <th className="text-center">Phone</th>
            <th className="text-right">Action</th>
            </tr>
            </thead>
            <tbody>
            {this.state.user_list.map((item, index) =>
                <tr key={index}>
                <td className="text-center">{item.id}</td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">{item.role}</td>
                <td className="text-center">{item.email}</td>
                <td className="text-center">{item.phone}</td>
                <td className="td-actions text-right">
                <OverlayTrigger placement="top" overlay={view}>
                <Button simple bsStyle="info" bsSize="xs">
                <i className="fa fa-user"></i>
                </Button>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={edit}>
                <Button simple bsStyle="success" bsSize="xs">
                <i className="fa fa-edit"></i>
                </Button>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={remove}>
                <Button simple bsStyle="danger" bsSize="xs" onClick={() => this.onDelete(item.id)}>
                <i className="fa fa-times"></i>
                </Button>
                </OverlayTrigger>
                </td>
                </tr>
                )}
            </tbody>
            </Table>
        }
        />
        </Col>
        </Row>
        </Grid>
        </div>
        );
}
}

export default Users;
