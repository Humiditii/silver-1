import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../../components/Button/Button';
import {connect} from 'react-redux';
import {checkAuthState} from '../../../store/actions/auth';
import {store_details} from '../../../store/actions/store';
import { Redirect } from 'react-router-dom';
import Preloader from '../../../components/Preloader/Preloader';


class ProductDetails extends Component {


    componentDidMount(){
        this.props.onAutoSignIn()
        // const token = localStorage.getItem('token')
        if(this.props.token){
            this.props.onMount(this.props.token)
            //console.log(this.props.token)
        }
        
    }


    render(){
        if(!this.props.token){
            return <Redirect to='/login' />
        }

        let amount = 0;
        let productCount = 0

        if(this.props.details.length > 0){

            amount = this.props.details.map( item => item.cost * item.quantity ).reduce((a,b) => a +b , 0 )
            productCount = this.props.details.map( item => item.quantity).reduce((a,b) => a + b , 0 )
        }

        let viewProductBody = (
            <div style={{fontSize:'15px'}} >
                    <div align='center' >
                        <h5>Products Cost</h5>
                    </div>
                    <div>
                        <table className='centered highlight '>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Qty</th>
                                    <th>Cost Price</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                
                              
                                 {this.props.details.length > 0 ? this.props.details.map( (item, index)=> (
                                   <Aux key ={index}>
                                        <tr>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>₦{item.cost}</td>
                                        <td>₦{item.cost * item.quantity}</td>
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
                        <Button btncolour='indigo' btnname='View Store' actionType='link' iconname='shop' whereto='/view-products' />
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
        details: state.cart.details
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAutoSignIn: () => { dispatch(checkAuthState()) },
        onMount: (token) => { dispatch(store_details(token)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);