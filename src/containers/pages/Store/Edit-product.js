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
        quantity: 0, 
        price: this.props.editParams.price,
        name: this.props.editParams.name
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        //token, productId, quantity, price
        const {quantity, price, name} = this.state;
        this.props.onEdit(this.props.token, this.props.editParams.productId,quantity, price, name)
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
            name: [ 'Quantity', 'Price', 'Name'],
            type: [ 'number', 'number', 'text'],
            icon: ['shopping_basket', 'money', 'description'],
            stateItem: ['quantity', 'price', 'name']
        }
        let form = (
            <div style={{marginTop: '40px'}} >
                <div align='center'  >
                    <h5>Edit Product</h5>
                </div>
                <div align='center' style={{font: '15px',color: 'green'}}>
                {this.props.updateMessage? <h5><i className="small material-icons">done_all</i>{this.props.updateMessage}</h5> : null }
                   
                </div>
                <div align='center' style={{font: '15px',color: 'red'}}>
                    <h5>{this.props.error}</h5>
                </div>
                <form className="col s12" onSubmit={this.onSubmitHandler} >
                            <div align='center' style={{fontSize: '16px', marginTop: '40px', color: 'white'}} >
                                <p> <i>Quantity</i>: Add {this.state.quantity} more</p>
                                <p><i>Price</i>: {this.state.price}</p>
                                <p><i>Product Name</i>: {this.state.name}</p>
                            </div>
                            
                            {config.name.map( (item, index) => (
                                <Input key={index} inputid={item} iconname={config.icon[index]}  inputtype={config.type[index]} labelname={item} changed={(event) =>  this.inputHandler(event, config.stateItem[index]) } />
                            ))}   
                            <div align='center' >
                            <Button action='submit' btncolour='indigo' btnname='Edit Product'  iconname='storage'  />
                        </div>
                </form>

                <div align='center' style={{marginTop: '50px'}}>
                    <Button btncolour='indigo' btnname='View Store' actionType='link' iconname='shop' whereto='/view-products' />
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
        editParams: state.cart.editParams,
        updateMessage: state.cart.updateMessage,
        error: state.cart.error
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onAutoSignin: () => { dispatch(checkAuthState()) },
        onEdit: (token, productId, quantity, price, name) => { dispatch( product_edit(token, productId, quantity, price, name) ) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);