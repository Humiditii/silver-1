import React, {Component} from 'react';
import Aux from '../../../hoc/Auxillary';
import {checkAuthState} from '../../../store/actions/auth';
import {connect} from 'react-redux';
import Input from '../../../components/Input/Input';
import {get_product_list} from '../../../store/actions/sale';
import { Redirect } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import {sell} from '../../../store/actions/sale';
import Preloader from '../../../components/Preloader/Preloader';



class NewSales extends Component {

    componentDidMount(){
        this.props.onAutoSignIn();
        // this.props.onLoadProducts(token)
        if(this.props.token){
            this.props.onLoadProducts(this.props.token);
            console.log(this.props.token)
            this.props.history.replace('/new-sale')
        }
    }


    state = {
        quantity: null,
        idNameObject: null
    }


    onSubmitHandler = (event) => {
        event.preventDefault()

        const {idNameObject} = this.state;

      if(idNameObject){
        const productId = idNameObject.split('-')[1];
        const productName = idNameObject.split('-')[0];
        const productQuantity = idNameObject.split('-')[2];

        if(this.state.quantity > productQuantity){
            return alert('You do not have enough product. Please reduce it or Buy more product');
        }else{
            this.props.iWantToSell(productName, productId, this.state.quantity, this.props.token)
        }
      }else{
          alert('Please Select an Option')
      }
       
    }   

    render(){

        let saleBody = (
            <div style={{marginTop: '20px'}} >
                    <div align='center' style={{borderLeft: '30px'}} >
                        <h5>Sell Products</h5>
                    </div>
                    <div align='center' style={{font: '17px', color: 'green'}} >
                       {this.props.success?  <p> <i className="small material-icons">done_all</i>{this.props.success}</p> : null }
                    </div>
                    <div>
                        <form className="col s12" onSubmit={this.onSubmitHandler}>
                            <div className="input-field col s12">
                                <select className='browser-default' onChange={(event) => this.setState({idNameObject: event.target.value})} >
                                <option defaultValue='Select'>Choose your option</option>
                                 
                                 {this.props.products.map((item, index)=>
                                         <option value={item[0]+'-'+item[1]+'-'+item[3]} key={index}>{item[0]}</option>
                                 )}
                                </select>
                                
                            </div> 
                            
                            <Input  inputid='quantity' iconname='shopping_basket'  inputtype='number' labelname='Quantity' changed={ (event) => this.setState({quantity: event.target.value})} />

                            <div align='center' >
                                <Button action='submit' btncolour='indigo' btnname='Sell Product'  iconname='storage'  />
                            </div>

                            <div align='center' style={{marginTop: '50px'}}>
                                <Button btncolour='indigo' btnname='View Store' actionType='link' iconname='shop' whereto='/view-products' />
                            </div>

                        </form>
                    </div>
                </div>
        )


        if(!this.props.token){
            return <Redirect to='/login' />
        }

        if(this.props.loading){
            saleBody = <Preloader />
        }

        return(
            <Aux>
                {saleBody}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        products: state.sales.products,
        success: state.sales.success,
        loading: state.sales.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAutoSignIn: () => { dispatch(checkAuthState()) },
        onLoadProducts: (token) => { dispatch( get_product_list(token) ) },
        iWantToSell: (product, productId, quantity, token) => { dispatch (sell(product, productId, quantity, token)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewSales);