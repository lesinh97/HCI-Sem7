import React, {Component} from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

// dinamically create app routes
import appRoutes from 'routes/app.jsx';

import { connect } from 'react-redux';
import * as actions from '../../reduxStore/actions/actionsIndex.js';

class App extends Component{
    componentDidUpdate(e){
        if(window.innerWidth < 993 && e.history.action === "PUSH" && document.documentElement.className.indexOf('nav-open') !== -1){
            document.documentElement.classList.toggle('nav-open');
        }
    }

    componentDidMount() {
        this.props.checkSignIn();
    }
    
    render(){
        //code super xau
        let switchRoutes = null;
        const isLogin = this.props.isAuthenticated;
        if(isLogin) {
            switchRoutes = (
                <Switch>
                    {
                        appRoutes.map((prop,key) => {
                            if(prop.path === "/") {
                                return (
                                    <Route path={prop.path} component={prop.component} key={key} />
                                );
                            } else if(prop.path === "/pages/" && this.props.location.pathname.indexOf("/pages/") !== -1) {
                                return (
                                    <Redirect to="/" key={key} />
                                )
                            }
                            return null;
                        })
                    }
                </Switch>
            )
        } else {
            switchRoutes = (
                <Switch>
                    {
                        appRoutes.map((prop,key) => {
                            if(prop.name === "Pages") {
                                return (
                                    <Route path={prop.path} component={prop.component} key={key} />
                                );
                            } 
                            return null;
                        })
                    }
                    {
                        <Redirect to="/pages/login-page" />
                    }
                </Switch>
            )
        }
        return switchRoutes;
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
