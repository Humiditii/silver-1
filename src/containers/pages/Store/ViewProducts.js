import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../../components/Button/Button';
import {connect} from 'react-redux';
import {checkAuthState} from '../../../store/actions/auth';
import {store_details, get_edit_params, deleteProduct} from '../../../store/actions/store';
import { Redirect } from 'react-router-dom';
import Preloader from '../../../components/Preloader/Preloader';


class ViewProducts extends Component {

    // state = {
    //     reload: false
    // }

    componentDidMount(){
        this.props.onAutoSignIn()
        // const token = localStorage.getItem('token')
        if(this.props.token){
            this.props.onMount(this.props.token)
            //console.log(this.props.token)
        }
        
    }

    inputHandler = (event, id, quantity, price, cost, name) => {
        event.preventDefault();
        this.props.onGotoEdit(quantity, price, cost, name, id)

        //console.log(id, quantity, price, name);
    }


    deleteHandler = (event, id) => {
        event.preventDefault();
        this.props.onDelete(this.props.token, id)
        this.props.onMount(this.props.token)

        //this.setState({reload: true});

    }

    // onClickHandler = (event) => {
    //     event.preventDefault();
    //     alert('I was clicked')
    // }

    render(){
        if(!this.props.token){
            return <Redirect to='/login' />
        }

        // if(this.state.reload){
        //     return <Redirect to ='/view-products' />
        // }

        let amount = 0;
        let productCount = 0

        if(this.props.details.length > 0){

            amount = this.props.details.map( item => item.totalPrice).reduce((a,b) => a +b , 0 )
            productCount = this.props.details.map( item => item.quantity).reduce((a,b) => a +b , 0 )
        }
    
        if (this.props.editId){
            return <Redirect to='/edit-product' />
        }

        let viewProductBody = (
            <div style={{fontSize:'15px'}} >
                    <div align='center' >
                        <h5>List Of Products</h5>
                    </div>
                    <div>
                        <table className='centered highlight '>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Qty</th>
                                    <th>S.Price</th>
                                    <th>Total Price</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
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
                                        <td onClick={(event) =>  this.inputHandler(event, item._id, item.quantity, item.price,item.cost,item.name) } ><Button  floatBtn=' btn-floating' btncolour='indigo' btnname='Edit'  iconname='edit'  /></td>
                                        <td onClick={(event) =>  this.deleteHandler(event, item._id)} ><Button floatBtn=' btn-floating' btncolour='red' btnname='Edit'  iconname='delete'  /></td>
                                    </tr>
                                   </Aux> 
                                ) ) : null}
                                
                                 
                            </tbody>
                        </table>
                        <h5 align='center' >{this.props.error}</h5>
                    </div>
                    <h5 align='center' style={{fontSize: '19px', paddingTop: '40px'}}> Total Price : ₦{amount} </h5>
                    <h5 align='center' style={{fontSize: '19px', paddingTop: '10px'}}> Item Count : {productCount} </h5>

                    <div align='center' style={{marginTop: '30px', marginBottom: '30px'}}>
                        <Button btncolour='indigo' btnname='Add Product' actionType='link' iconname='shop' whereto='/add-product' />
                    </div>

                    <div align='center' style={{marginTop: '30px',paddingBottom: '30px' }} >
                        <Button btncolour='indigo' btnname='Sell Now' actionType='link' iconname='storage' whereto='/new-sale' />
                    </div>
                </div>
        );

        if(this.props.adding){
            viewProductBody = <Preloader />
        }
        return (
            <Aux>
                {viewProductBody}
            </Aux>
        )
    }
}



const mapStateToProps = state => {
    return {
        token: state.auth.token,
        details: state.cart.details,
        error: state.cart.error,
        adding: state.cart.adding,
        editId: state.cart.editParams.productId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAutoSignIn: () => { dispatch(checkAuthState()) },
        onMount: (token) => { dispatch(store_details(token)) },
        onGotoEdit: (quantity, price, cost, name,productId) => { dispatch( get_edit_params(quantity, price, cost, name, productId) ) },
        onDelete: (token, productId) => { dispatch( deleteProduct(token, productId) ) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts);