import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const init_store_details = () => {
    return {
        type: actionTypes.INIT_STORE_DETAILS
    }
}

export const store_details_success = ([...details]) => {
    return {
        type: actionTypes.STORE_DATAILS_SUCCESS,
        details: [...details]
    }
}

export const store_details_failed = (error) => {
    return {
        type: actionTypes.STORE_DATAILS_FAILED,
        error: error
    }
}

export const add_product_success = (successMessage) => {
    return {
        type: actionTypes.ADD_PRODUCT_SUCCESS,
        successMessage: successMessage
    }
}

export const add_product_failed = (error) => {
    return {
        type: actionTypes.ADD_PRODUCT_FAILED,
        error: error
    }
}

export const add_product_start = () => {
    return {
        type: actionTypes.ADD_PRODUCT_START
    }
}

export const store_details = (token) => {
    return dispatch => {
        dispatch(init_store_details);

        const endpoint = '/product/products'

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        } 
        
        axios.get(endpoint, config).then( result=> {
            console.log(result)
            dispatch(store_details_success([...result.data.data]))
        }).catch( err => {
           // console.log(err.response.data.message)
            dispatch(store_details_failed(err.response.data.message))
        })
    }
}


export const add_product = (token, name, price, quantity) => {
    return dispatch => {
        dispatch( add_product_start() )

        const body = {
            name: name,
            price: price,
            quantity: quantity
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        } 

        const endpoint = '/product/add-product';

        axios.post(endpoint,body,config).then( result => {
            
            dispatch( add_product_success(result.data.message) )
        }).catch(err => {
            dispatch(add_product_failed(err.response.data.message))
        })
    }
}