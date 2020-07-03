import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary';
import {connect} from 'react-redux';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import Preloader from '../../../components/Preloader/Preloader';
import {checkAuthState} from '../../../store/actions/auth';
import {product_edit} from '../../../store/actions/store';
import { Redirect } from 'react-router-dom';


class EditProduct extends Component {
    componentDidMount(){
        this.props.onAutoSignin()
        console.log(this.props.token)
        //this.props.history.replace('/add-product')
    }

    state = {
        quantity: this.props.editParams.quantity, 
        price: this.props.editParams.price
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        //token, productId, quantity, price
        const {quantity, price} = this.state;
        this.props.onEdit(this.props.token, this.props.editParams.productId,quantity, price)
        // this.props.onAddProduct(this.props.token,productName,price,quantity)
    }


    inputHandler = (event, item ) => {
        const updateFields = {
            ...this.state,
            [item]: event.target.value
        }
        this.setState(updateFields);
    }
    render(){
        const config = {
            name: [ 'Quantity', 'Price'],
            type: [ 'number', 'number'],
            icon: ['shopping_basket', 'money'],
            stateItem: ['quantity', 'price']
        }
        let form = (
            <div style={{marginTop: '40px'}} >
                <div align='center'  >
                    <h5>Edit Product</h5>
                </div>
                {/* <div align='center' style={{color: 'green'}}>
                    <h5>{this.props.successMessage}</h5>
                </div> */}
                <form className="col s12" onSubmit={this.onSubmitHandler} >
                            <div align='center' style={{fontSize: '16px', marginTop: '40px', color: 'green'}} >
                                <p> <i>Quantity</i>: {this.state.quantity}</p>
                                <p><i>Price</i>: {this.state.price}</p>
                            </div>
                            
                            {config.name.map( (item, index) => (
                                <Input key={index} inputid={item} iconname={config.icon[index]}  inputtype={config.type[index]} labelname={item} changed={(event) =>  this.inputHandler(event, config.stateItem[index]) } />
                            ))}   
                            <div align='center' >
                            <Button action='submit' btncolour='indigo' btnname='Edit Product'  iconname='storage'  />
                        </div>
                </form>

                <div align='center' style={{marginTop: '50px'}}>
                    <Button btncolour='indigo' btnname='View Store' actionType='link' iconname='directions_bike' whereto='/view-products' />
                </div>
            </div>
        );

        if(!this.props.token){
            return <Redirect to='/login' />
        }

        if(this.props.adding){
            form = <Preloader />
        }
        return (
            <Aux>
                <div>
                    {form}
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        editParams: state.cart.editParams
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onAutoSignin: () => { dispatch(checkAuthState()) },
        onEdit: (token, productId, quantity, price) => { dispatch( product_edit(token, productId, quantity, price) ) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);