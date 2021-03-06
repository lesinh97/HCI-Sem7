import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, userData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
        userData: userData,
        error: false
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('expirationDate');
    sessionStorage.removeItem('userId');   
    sessionStorage.removeItem('currentUser');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime*1000);
    };
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        
        const authData = {
            login_email: email,
            login_password: password
        };
        //url tào lao
        // let url = "https://5c0f8c30fc4df20013083a63.mockapi.io/foobaripa/user";
        let url = "http://localhost:3001/sessions/"
        axios.post(url, authData)
        .then(response => {
            console.log(response.data);
            console.log("foobar");
            sessionStorage.setItem('token', response.data.remember_digest);
            sessionStorage.setItem('userId', response.data.id);
            sessionStorage.setItem('currentUser', JSON.stringify(response.data));
            dispatch(authSuccess(response.data.remember_digest, response.data.id, response.data));
        })
        .catch(err => {
          dispatch(authFail(true));
        })
    //    dispatch(checkAuthTimeout(response.data.expiresIn));
    };
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path,
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = sessionStorage.getItem('token');
        console.log
        if(!token) {
            dispatch(logout());
        } else {
            // const expirationDate = new Date(sessionStorage.getItem('expirationDate'));
            // if (expirationDate <= new Date()) {
                // dispatch(logout());
            // } else {
                const userId = sessionStorage.getItem('userId');
                const userData = JSON.parse(sessionStorage.getItem('currentUser'));
                dispatch(authSuccess(token, userId, userData));
                // dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000));
            // }
        }
    };
};