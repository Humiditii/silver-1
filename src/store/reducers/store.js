import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: false,
    adding: false,
    details: [],
    successMessage: null,
    updateMessage: null,
    editParams: {
        quantity: null,
        price: null,
        productId: null
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


const get_edit_params = (state, action) => {
    return {
        ...state,
        editParams: {
            quantity: action.quantity,
            price: action.price,
            productId: action.productId
        }
    }
}

const init_product_edit = (state, action) => {
    return {
        ...state,
        adding: true

    }
}

const product_edit_success = (state, action) => {
    return {
        ...state,
        updateMessage: action.successMsg,
        editParams: {
            quantity: null,
            price: null,
            productId: null
        }
    }
}

const product_edit_failed = (state, action) => {
    return {
        ...state,
        error: action.error
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
        case actionTypes.GET_EDIT_PARAMS: return get_edit_params(state, action);
        case actionTypes.INIT_PRODUCT_EDIT: return init_product_edit(state, action);
        case actionTypes.PRODUCT_EDIT_FAILED: return product_edit_failed(state, action);
        case actionTypes.PRODUCT_EDIT_SUCCESS: return product_edit_success(state, action)
        default:
            return state;
    }
}


export default reducer;