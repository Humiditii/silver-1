import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: false,
    adding: false,
    details: [],
    successMessage: null,
    editParams: {
        quantity: null,
        price: null
    }
}

const init_store_details = (state, action) => {
    return{
        ...state,
        adding: true
    }
}

const store_details_failed = (state, action) => {
    return {
        ...state,
        adding: false,
        error: action.error,
        details: []
    }
}

const store_details_success = (state, action) => {
    return {
        ...state, 
        adding: false,
        error: false,
        details: [...action.details]
    }
}

const add_product_success = (state, action) => {
    return {
        ...state,
        adding: false,
        successMessage: action.successMessage,
    }
}

const add_product_failed = (state, action) => {
    return {
        ...state,
        adding: false,
        error: action.error
    }
}

const add_product_start = (state, action) => {
    return {
        ...state,
        adding: true
    }
}


const reducer = (state=initialState, action) => {
    switch( action.type ){
        case actionTypes.INIT_STORE_DETAILS : return init_store_details(state, action);
        case actionTypes.STORE_DATAILS_SUCCESS: return store_details_success(state, action);
        case actionTypes.STORE_DATAILS_FAILED: return store_details_failed(state, action);
        case actionTypes.ADD_PRODUCT_START : return add_product_start(state, action);
        case actionTypes.ADD_PRODUCT_FAILED: return add_product_failed(state, action);
        case actionTypes.ADD_PRODUCT_SUCCESS: return add_product_success(state, action);
        default:
            return state;
    }
}


export default reducer;