import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../../components/Button/Button';
import {connect} from 'react-redux';
import {checkAuthState} from '../../../store/actions/auth';
import { Redirect } from 'react-router-dom';
import { get_sales } from '../../../store/actions/sale';
import Preloader from '../../../components/Preloader/Preloader';
import Input from '../../../components/Input/Input';

class ViewSales extends Component {

    state = {
        fromDate: null,
        toDate: null
    }

    componentDidMount(){
        this.props.onAutoSignIn()
        if(this.props.token){
            this.props.onGetSale(this.props.token)
        }
        
    }

    onClickHandler = (event) => {
        event.preventDefault();
        alert('I was clicked')
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onGetSale(this.props.token, this.state.fromDate, this.state.toDate);
    }

    render(){
        if(!this.props.token){
            return <Redirect to='/login' />
        }

        let amount = '0'

        if(this.props.details.length > 0){

            amount = this.props.details.map( item => item.salesPrice).reduce((a,b) => a + b , 0 )
        }

        let saleBody = (
            <div style={{fontSize:'15px'}} >
                    <div align='center' >
                        <h5>Sales Record</h5>
                    </div>

                    <div>
                        <form onSubmit={this.onSubmitHandler}>
                            <Input  inputid='startdate' iconname='calender'  inputtype='date' labelname='From' changed={ (event) => this.setState({fromDate: event.target.value})} />
                            <Input  inputid='todate' iconname='calender'  inputtype='date' labelname='To' changed={ (event) => this.setState({toDate: event.target.value})} />

                            <div align='center' >
                                <Button action='submit' btncolour='indigo' btnname='View Records'  iconname='storage'  />
                            </div>
                        </form>
                    </div>

                    <h5 align='center' >{this.props.error}</h5>
                    <div>
                        <table className='centered highlight '>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Sales Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                 {this.props.details.length > 0 ? this.props.details.map( (item, index)=> (
                                   <Aux key ={index}>
                                        <tr>
                                        <td>{item.productName}</td>
                                        <td>{item.quantity}</td>
                                        <td>₦{item.salesPrice}</td>
                                    </tr>
                                   </Aux>
                                ) ) : null}
                            </tbody>
                        </table>
                    </div>
                    <h5 align='center' style={{fontSize: '19px', paddingTop: '40px'}}> Total Price : ₦{amount} </h5>
                </div>

                
        );

        if(this.props.loading){
            saleBody = <Preloader />
        }

        return (
            <Aux>
                {saleBody}
                <div align='center' >
                    <Button btncolour='indigo' btnname='Sell Now' actionType='link' iconname='directions_bike' whereto='/new-sale' />
                </div>
            </Aux>
        )
    }
}



const mapStateToProps = state => {
    return {
        token: state.auth.token,
        details: state.sales.details,
        error: state.sales.error,
        loading: state.sales.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAutoSignIn: () => { dispatch(checkAuthState()) },
        onGetSale: (token, startDate, endDate) => { dispatch(get_sales(token,startDate, endDate)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewSales);