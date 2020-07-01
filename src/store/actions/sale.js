import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

const init_get_sales = () => {
    return{
        type: actionTypes.INIT_GET_SALES
    }
}

const get_sales_failed = (error) => {
    return {
        type: actionTypes.GET_SALES_FAILED,
        error: error
    }
}

const get_sales_success = (success) => {
    return {
        type: actionTypes.GET_SALES_sUCCESS,
        success: success
    }
}

const get_sales = (token) => {
    return dispatch => {
        dispatch(init_get_sales())

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }

        const endpoint = '/sale/sales';

        axios.get(endpoint, config).then( result => {
            dispatch(get_sales_success(result.data.message))
        }).catch(err => {
            dispatch(get_sales_failed(err.response.data.message))
        })

    }
}
