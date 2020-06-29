import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';


class AddProduct extends Component {
    state = {
        productName: null,
        quantity: null, 
        price: null
    }


    onSubmitHandler = (event) => {
        event.preventDefault()

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
                <form className="col s12" onSubmit={this.onSubmitHandler} >
                            
                            {config.name.map( (item, index) => (
                                <Input key={index} inputid={item} iconname={config.icon[index]}  inputtype={config.type[index]} labelname={item} changed={(event) =>  this.inputHandler(event, config.stateItem[index]) } />
                            ))}
                           
                            <div align='center' >
                            <Button action='submit' btncolour='indigo' btnname='Add Product'  iconname='storage'  />
                        </div>
                </form>
            </div>
        );
        return (
            <Aux>
                <div>
                   
                    {form}
                </div>
            </Aux>
        )
    }
}


export default AddProduct;