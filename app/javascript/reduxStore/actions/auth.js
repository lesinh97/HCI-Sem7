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
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');    
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
            email: email,
            password: password,
            returnSecureToken: true
        };
        //url tào l
        let url = "https://5c0f8c30fc4df20013083a63.mockapi.io/foobaripa/user";
        axios.post(url, authData)
        .then(response => {
            console.log(response);
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('token', response.data.idToken);
            // localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', response.data.localId);
            localStorage.setItem('currentUser', JSON.stringify(response.data.userData));
            dispatch(authSuccess(response.data.idToken, response.data.localId, response.data.userData));
            
            // dispatch(checkAuthTimeout(response.data.expiresIn));
        })
        .catch(err => {
            console.log(err);
            dispatch(authFail(err.response.data.error));
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
        const token = localStorage.getItem('token');
        if(!token) {
            dispatch(logout());
        } else {
            // const expirationDate = new Date(localStorage.getItem('expirationDate'));
            // if (expirationDate <= new Date()) {
                // dispatch(logout());
            // } else {
                const userId = localStorage.getItem('userId');
                const userData = JSON.parse(localStorage.getItem('currentUser'));
                dispatch(authSuccess(token, userId, userData));
                // dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000));
            // }
        }
    };
};