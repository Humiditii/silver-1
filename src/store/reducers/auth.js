import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: false,
    loading: false,
    token: null,
    authMsg: null,
    signupMsg: null,
    mismatch: null
}


const auth_init = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const signin_success = (state, action) => {
    return {
        ...state,
        authMsg: action.authMsg,
        token: action.token,
        loading: false
    }
}

const signin_fail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.err
    }
}

const signup_fail = (state, action) => {
    return {
        ...state,
        loading: false,
        err: action.err,
        mismatch: null
    }
}

const signup_success = (state, action) => {
    return  {
        ...state,
        loading: false
    }
}

const password_mismatch = (state, action) => {
    return {
        ...state,
        mismatch: 'Password Does Not Match'
    }
}

const logout = (state, action) => {
    return {
        ...state,
        token: null,
        authMsg:null
    }
}

const reducer = (state=initialState, action) => {
    switch( action.type ){
        case actionTypes.INIT_AUTH_START : return auth_init(state, action);
        case actionTypes.SIGNIN_FAIL : return signin_fail(state, action);
        case actionTypes.SIGNIN_SUCCESS: return signin_success(state, action);
        case actionTypes.SIGNUP_FAIL: return signup_fail(state, action);
        case actionTypes.SIGNUP_SUCCESS: return signup_success(state, action);
        case actionTypes.PASSWORD_MISMATCH: return password_mismatch(state, action);
        case actionTypes.AUTH_LOGOUT : return logout(state, action)
        default:
            return state;
    }
}


export default reducer;
