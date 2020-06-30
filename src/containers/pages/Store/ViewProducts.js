import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../../components/Button/Button';
import {connect} from 'react-redux';
import {checkAuthState} from '../../../store/actions/auth';
import {store_details} from '../../../store/actions/store';
import { Redirect } from 'react-router-dom';


class ViewProducts extends Component {

    componentDidMount(){
        this.props.onAutoSignIn()
        // const token = localStorage.getItem('token')
        if(this.props.token){
            this.props.onMount(this.props.token)
            //console.log(this.props.token)
        }
        
    }

    inputHandler = (event, item ) => {
        event.preventDefault();
        alert(item)
    }

    onClickHandler = (event) => {
        event.preventDefault();
        alert('I was clicked')
    }

    render(){
        if(!this.props.token){
            return <Redirect to='/login' />
        }

        let amount = '0'

        if(this.props.details.length > 0){

            amount = this.props.details.map( item => item.totalPrice).reduce((a,b) => a +b , 0 )
        }
    

        return (
            <Aux>
                <div style={{fontSize:'15px'}} >
                    <div align='center' >
                        <h5>List Of Products</h5>
                    </div>
                    <div>
                        <table className='centered highlight '>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Item Price</th>
                                    <th>Total Price</th>
                                    <th>Edit/Update</th>
                                </tr>
                            </thead>

                            <tbody>
                                
                              
                                 {this.props.details.length > 0 ? this.props.details.map( (item, index)=> (
                                   <Aux key ={index}>
                                        <tr>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>₦{item.price}</td>
                                        <td>₦{item.totalPrice}</td>
                                        <td onClick={(event) =>  this.inputHandler(event, item._id) } ><Button  floatBtn=' btn-floating' btncolour='indigo' btnname='Edit'  iconname='edit'  /></td>
                                    </tr>
                                   </Aux>
                                ) ) : null}
                                
                                 
                            </tbody>
                        </table>
                        <h5 align='center' >{this.props.error}</h5>
                    </div>
                    <h5 align='center' style={{fontSize: '19px', paddingTop: '40px'}}> Total Price : ₦{amount} </h5>
                </div>
            </Aux>
        )
    }
}


const mapStateToProps = state => {
    return {
        token: state.auth.token,
        details: state.cart.details,
        error: state.cart.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAutoSignIn: () => { dispatch(checkAuthState()) },
        onMount: (token) => { dispatch(store_details(token)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts);