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

import { isAllowed } from '../../reduxStore/utility';
class App extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.checkSignIn();
    }

    switchRoutes = () => {
        const isLogin = this.props.isAuthenticated;
        console.log(this.props.location.pathname)
        let route = (
            <Switch>
                <Route path="/homepage" component={Homepage} />
                <Route path="/pages/login-page" exact component={Pages} />
                <Route path="/pages/register-page" exact component={Pages} />
                <Route path="/pages/lock-screen-page" exact component={Pages} />

                {/* <Redirect from="/" to="/homepage" /> */}
            </Switch>
        )
        if(isLogin) {
            return (
                <Switch>
                    <Route path="/homepage" component={Homepage} />
                    {isAllowed(this.props.currentUser, "admin") ? <Route path="/admin" component={Dash} /> : null}
                    
                    <Redirect from="/" to="/homepage" />
                </Switch>
            )
        }
        return route;
    }

    render(){
        return this.switchRoutes();
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        currentUser: state.auth.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkSignIn: () => dispatch(actions.authCheckState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
