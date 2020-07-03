import * as actionTypes from '../actions/actionTypes';



const initialState = {
    error: null,
    loading: false,
    details: [],
    success: null,
    products: []
}

const init_get_sales = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const get_sales_success = (state, action) => {
    return{
        ...state,
        loading: false,
        details: [...action.details],
        error: null
    }
}

const get_sales_failed = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}

const init_get_products = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const get_products_failed = (state, action) => {
    return{
        ...state, 
        loading: false,
        error: action.error
    }
}

const get_products_success = (state, action) => {
    return {
        ...state, 
        products: [...action.products],
        loading: false
    }
}


const init_sale = (state, action) => {
    return {
        ...state, 
        loading: true
    }
}

const sale_success = (state, action) => {
    return {
        ...state, 
        success: action.saleMessage,
        loading: false
    }
}

const sale_failed = (state, action) => {
    return {
        ...state, 
        loading: false,
        error: action.error
    }
}

const reducer = (state=initialState, action) => {
    switch( action.type ){
        case actionTypes.INIT_GET_SALES: return init_get_sales(state, action);
        case actionTypes.GET_SALES_FAILED: return get_sales_failed(state, action)
        case actionTypes.GET_SALES_SUCCESS : return get_sales_success(state, action);
        case actionTypes.INIT_GET_PRODUCT_LIST : return init_get_products(state, action);
        case actionTypes.GET_PRODUCT_LIST_SUCCESS : return get_products_success(state, action);
        case actionTypes.GET_PRODUCT_LIST_FAILED : return get_products_failed(state, action);
        case actionTypes.INIT_SALE : return init_sale(state, action);
        case actionTypes.SALE_FAILED: return sale_failed(state, action);
        case actionTypes.SALE_SUCCESS: return sale_success(state, action);
        default:
            return state;
    }
}


export default reducer;