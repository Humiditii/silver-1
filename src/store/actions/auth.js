import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const auth_init = () => {
    return {
        type: actionTypes.INIT_AUTH_START
    }
}

export const signin_fail = (err) => {
    return{
        type: actionTypes.SIGNIN_FAIL,
        err: err
    }
}

export const mismatch = () => {
    return {
        type: actionTypes.PASSWORD_MISMATCH
    }
}

export const signin_success = (token, authMsg) => {
    return {
        type: actionTypes.SIGNIN_SUCCESS,
        token: token,
        authMsg: authMsg
    }
}

export const signup_success = () => {
    return {
        type: actionTypes.SIGNUP_SUCCESS
    }
}

export const signup_fail = (err) => {
    return {
        type: actionTypes.SIGNUP_FAIL,
        err: err
    }
}

export const signin = (businessName, password) => {
    return dispatch => {
        dispatch(auth_init())

        const body = {
            businessName: businessName,
            password: password
        }

        const config =  {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const endpoint = '/auth/signin';

        axios.post(endpoint, body, config).then(response => {

            const expiresIn = 3600 * 24* 1000;
            const expirationDate = new Date(new Date().getTime() + expiresIn);

            localStorage.setItem('expirationDate', expirationDate)
            localStorage.setItem('token', response.data.token)

            dispatch(signin_success(response.data.token, response.data.message))

        }).catch(err => {
            dispatch(signin_fail(err.response.data.message))
        })
    }
}

export const signup = (businessName, email, password) => {

    return dispatch => {
        dispatch( auth_init() )

        const body = {
            businessName: businessName,
            email: email,
            password: password
        }

        const config =  {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const endpoint = '/auth/signup';

        axios.post(endpoint, body, config).then( response => {
            dispatch(signup_success())
        }).catch( err => {
            dispatch(signup_fail(err))
        })
    }

}

export const logout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');

    return{
        type: actionTypes.AUTH_LOGOUT
    }
}



export const checkAuthTimeout = (expiresIn) => {
    return dispatch => {

        setTimeout(() => {
            dispatch(logout());
        }, expiresIn);
    }
}

export const checkAuthState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout());
            //console.log('First logout excecuted');
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()){
                dispatch(logout());
                //console.log('Second logout excecuted');
            }else{
               dispatch(signin_success(token, 'Logged before'))
                //dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) ));
                //console.log((expirationDate.getTime() - new Date().getTime()) / 1000);
                //console.log('worked to this extent');
            }
        }
    }
}