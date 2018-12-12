import React, {Component} from 'react';
import {
    Switch,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';

// dinamically create app routes
import appRoutes from 'routes/app.jsx';

import { connect } from 'react-redux';
import * as actions from '../../reduxStore/actions/actionsIndex.js';
import Pages from 'containers/Pages/Pages.jsx';
import Dash from 'containers/Dash/Dash.jsx';
import Homepage from '../../components/Homepage/Homepage';

class App extends Component{
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.checkSignIn();
    }

    switchRoutes = () => {
        const isLogin = this.props.isAuthenticated;
        let route = (
            <Switch>
                <Route path="/homepage" component={Homepage} />
                <Route path="/pages/login-page" exact component={Pages} />
                <Route path="/pages/register-page" exact component={Pages} />
                <Route path="/pages/lock-screen-page" exact component={Pages} />
                {/* { (this.props.location.pathname.indexOf("admin") === -1 || !isLogin) ? <Redirect to="/homepage" /> : null } */}
            </Switch>
        )
        if(isLogin) {
            console.log("logined");
            return (
                <Switch>
                    <Route path="/homepage" component={Homepage} />
                    <Route path="/admin" component={Dash} />
                    {/* {(this.props.location.pathname.indexOf("/pages/") !== -1) ? <Redirect to="/homepage" /> : null} */}
                    <Redirect from="/" to="/homepage" />
                </Switch>
            )
        }
        return route;
    }

    render(){
        console.log("rendered");
        return this.switchRoutes();
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkSignIn: () => dispatch(actions.authCheckState()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
