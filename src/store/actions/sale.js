import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const init_get_sales = () => {
    return{
        type: actionTypes.INIT_GET_SALES
    }
}

export const get_sales_failed = (error) => {
    return {
        type: actionTypes.GET_SALES_FAILED,
        error: error
    }
}

export const get_sales_success = ([...details]) => {
    return {
        type: actionTypes.GET_SALES_SUCCESS,
        details: [...details]
    }
}

export const get_sales = (token, startDate, endDate) => {
    return dispatch => {
        dispatch(init_get_sales());

       

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }

        if (!startDate && !endDate){
            startDate = 'now';
            endDate = 'now';
        }

        const endpoint = `/sale/sales/${startDate}/${endDate}`;

        axios.get(endpoint, config).then( result => {
            console.log(result)
            dispatch(get_sales_success([...result.data.data]))
        }).catch(err => {
            dispatch(get_sales_failed(err.response.data.message))
        })

    }
}

export const init_get_products = () => {
    return {
        type: actionTypes.INT_GET_PRODUCT_LIST
    }
}

export const get_product_list_success = ([...products]) => {
    return {
        type: actionTypes.GET_PRODUCT_LIST_SUCCESS,
        products: [...products]
    }
}

export const get_product_list_failed = (error) => {
    return {
        type: actionTypes.GET_PRODUCT_LIST_FAILED,
        error: error
    }
}

export const get_product_list = (token) => {
    return dispatch => {
        dispatch( init_get_products() );

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }

        const endpoint = '/sale/product-list';

        axios.get(endpoint, config).then( result=> {
            //console.log(result.data.data)
            dispatch( get_product_list_success([...result.data.data]) )
        }).catch(err =>{
            dispatch(get_product_list_failed(err.response.data.message))
        })
    }   
}

export const init_sale = () => {
    return {
        type: actionTypes.INIT_SALE
    }
}

export const sale_success = (saleMessage) => {
    return {
        type: actionTypes.SALE_SUCCESS,
        saleMessage: saleMessage
    }
}

export const Sale_failed = (error) => {
    return {
        type: actionTypes.SALE_FAILED,
        error: error
    }
}

export const sell = (product, productId, quantity, token) => {
    return dispatch => {
        dispatch( init_sale() )

        const body = {
            product: product,
            productId: productId,
            quantity: quantity
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }

        const endpoint = '/sale/new-sale';

        axios.post(endpoint, body, config).then( result => {
            dispatch( sale_success(result.data.message) )
        }).catch( err=> {
            dispatch( Sale_failed(err.response.data.message) )
        })
    }
}