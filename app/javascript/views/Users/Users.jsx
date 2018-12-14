import React, { Component } from 'react';
import {
  Grid, Row, Col,
  Table,
  OverlayTrigger,
  Tooltip, Modal, FormGroup, FormControl, Media, Checkbox, ControlLabel
} from 'react-bootstrap';
import axios from 'axios';
// react component that creates a switch button that changes from on to off mode
import Switch from 'react-bootstrap-switch';

import Card from 'components/Card/Card.jsx';

import Button from 'elements/CustomButton/CustomButton.jsx';

import { RegisterPage } from 'views/Pages/RegisterPage.jsx';
import callApi from '../../reduxStore/apiCaller';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddModal: false,
      userList: [],
      userFormData: {
        userName: "",
        userRole: "",
        userEmail: "",
        userPhone: "",
        userJoinDay: "",
      },
    };
  }

  handleClose = () => {
    this.setState({ showAddModal: false });
  }

  handleShow = (id) => {
    callApi('users/' + id, 'GET', null).then(res => {
      this.setState({
        userFormData: {
          userName: res.data.name,
          userRole: res.data.role,
          userEmail: res.data.email,
          userPhone: res.data.phone,
          userJoinDay: res.data.created_at
        }
      })
    })
    this.setState({ showAddModal: true });
  }

  componentDidMount() {
    callApi('users', 'GET', null).then(res => {
      this.setState({ userList: res.data });
    })
  }
  onDelete = (id) => {
    callApi('users/' + id, 'DELETE', null).then(res => {
      callApi('users', 'GET', null).then(res => {
        this.setState({ userList: res.data });
      })
    })
  }
  render() {
    const view = (
      <Tooltip id="view">View Profile</Tooltip>
    );
    const remove = (
      <Tooltip id="remove">Remove</Tooltip>
    );
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={1} />
            <Col md={11}>
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
                      {this.state.userList.map((item, index) =>
                        <tr key={index}>
                          <td className="text-center">{item.id}</td>
                          <td className="text-center">{item.name}</td>
                          <td className="text-center">{item.role}</td>
                          <td className="text-center">{item.email}</td>
                          <td className="text-center">{item.phone}</td>
                          <td className="td-actions text-right">
                            <OverlayTrigger placement="top" overlay={view}>
                              <Button simple bsStyle="info" bsSize="xs" onClick={() => this.handleShow(item.id)}>
                                <i className="fa fa-user"></i>
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

        <Modal show={this.state.showAddModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thông tin tài khoản</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card
              title={this.state.userFormData.userName}
              content={
                <form>
                  <FormGroup>
                    <ControlLabel>
                      Email
                            </ControlLabel>
                    <FormControl
                      value={this.state.userFormData.userEmail}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>
                      Số điện thoại
                            </ControlLabel>
                    <FormControl
                      value={this.state.userFormData.userPhone}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>
                      Vị trí
                            </ControlLabel>
                    <FormControl
                      value={this.state.userFormData.userRole}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>
                      Ngày tham gia
                            </ControlLabel>
                    <FormControl
                      value={this.state.userFormData.userJoinDay}
                    />
                  </FormGroup>
                </form>
              }
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Users;
