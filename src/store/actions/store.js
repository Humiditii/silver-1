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

export const get_edit_params = (quantity, price, productId) => {
    return {
        type: actionTypes.GET_EDIT_PARAMS,
        quantity: quantity,
        price: price,
        productId: productId
    }
}

export const init_product_edit = () => {
    return {
        type: actionTypes.INIT_PRODUCT_EDIT
    }
}

export const product_edit_success = (successMsg) => {
    return {
        type: actionTypes.PRODUCT_EDIT_SUCCESS,
        successMsg: successMsg
    }
}

export const product_edit_failed = (error) => {
    return {
        type: actionTypes.PRODUCT_EDIT_FAILED,
        error: error
    }
}

export const product_edit = (token,productId, quantity, price) => {
    return dispatch => {
        dispatch(init_product_edit())

        const body = {
            quantity: quantity,
            price: price
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }

        const endpoint = `/product/edit-product/${productId}`;

        axios.patch(endpoint, body, config).then(result=> {
            console.log(result);                                                       
            dispatch(product_edit_success(result.data.message))
        }).catch(err => {
            dispatch(product_edit_failed(err.response.data.message))
        })
    }
}