import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary';
import {connect} from 'react-redux';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import Preloader from '../../../components/Preloader/Preloader';
import {checkAuthState} from '../../../store/actions/auth';
import {add_product} from '../../../store/actions/store';
import { Redirect } from 'react-router-dom';


class AddProduct extends Component {
    componentDidMount(){
        this.props.onAutoSignin()
        console.log(this.props.token)
        this.props.history.replace('/add-product')
    }

    state = {
        productName: null,
        quantity: null, 
        price: null
    }


    onSubmitHandler = (event) => {
        event.preventDefault()
        const {productName, quantity, price} = this.state;
        this.props.onAddProduct(this.props.token,productName,price,quantity)
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
            name: ['Product Name', 'Quantity', 'Price'],
            type: ['text',  'number', 'number'],
            icon: ['description', 'shopping_basket', 'money'],
            stateItem: ['productName', 'quantity', 'price']
        }
        let form = (
            <div style={{marginTop: '40px'}} >
                <div align='center'  >
                    <h5>Add Product</h5>
                </div>
                <div align='center' style={{color: 'green'}}>
                {this.props.successMessage? <h5><i className="small material-icons">done_all</i>{this.props.successMessage}</h5> : null }
                   
                </div>
                <form className="col s12" onSubmit={this.onSubmitHandler} >
                            
                            {config.name.map( (item, index) => (
                                <Input key={index} inputid={item} iconname={config.icon[index]}  inputtype={config.type[index]} labelname={item} changed={(event) =>  this.inputHandler(event, config.stateItem[index]) } />
                            ))}
                           
                            <div align='center' >
                            <Button action='submit' btncolour='indigo' btnname='Add Product'  iconname='storage'  />
                        </div>
                </form>

                <div align='center' style={{marginTop: '30px'}}>
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
        adding: state.cart.adding,
        successMessage: state.cart.successMessage
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onAutoSignin: () => { dispatch(checkAuthState()) },
        onAddProduct: (token, name, price, quantity) => {dispatch (add_product(token, name, price, quantity)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);