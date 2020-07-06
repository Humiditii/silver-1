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

export const clearMessage = (actionClear) => {
    return dispatch => {
        setTimeout( () => {
            dispatch(actionClear)
        }, 2 * 1000 )
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
            //console.log(result)
            dispatch(store_details_success([...result.data.data]))
        }).catch( err => {
           // console.log(err.response.data.message)
            dispatch(store_details_failed(err.response.data.message))
        })
    }
}


export const add_product = (token, name, price, quantity, cost) => {
    return dispatch => {
        dispatch( add_product_start() )

        const body = {
            name: name,
            price: price,
            quantity: quantity,
            cost: cost
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
            dispatch ( clearMessage(add_product_success(null)) )
        }).catch(err => {
            dispatch(add_product_failed(err.response.data.message))
        })
    }
}

export const get_edit_params = (quantity, price, name, productId) => {
    return {
        type: actionTypes.GET_EDIT_PARAMS,
        quantity: quantity,
        price: price,
        productId: productId,
        name: name
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

export const product_edit = (token,productId, quantity, price, name) => {
    return dispatch => {
        dispatch(init_product_edit())

        const body = {
            quantity: quantity,
            price: price,
            productName: name
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
            dispatch ( clearMessage(product_edit_success(null)) )
        }).catch(err => {
            dispatch(product_edit_failed(err.response.data.message))
        })
    }
}

export const delete_init = () => {
    return {
        type: actionTypes.DELETE_INIT
    }
}


export const delete_success = (deleteMsg) => {
    return {
        type: actionTypes.DELETE_SUCCESS,
        deleteMsg: deleteMsg
    }
}

export const delete_failed = (error) => {
    return {
        type: actionTypes.DELETE_FAILED,
        error: error
    }
}

export const deleteProduct = (token, productId) => {
    return dispatch => {
        dispatch(delete_init())

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }

        const endpoint = `/product/delete/${productId}`;

        axios.delete(endpoint,config).then( result => {
            console.log(result)
            dispatch( delete_success(result.data.message) )
            dispatch( clearMessage(delete_success(null)) )
        }).catch( err => {
            const error = err.response ? err.response.data.message : err.message;
            dispatch (delete_failed(error))
        })


    }
}