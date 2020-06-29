import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../../components/Button/Button';
import {connect} from 'react-redux';
import {checkAuthState} from '../../../store/actions/auth';


class ViewProducts extends Component {

    componentDidMount(){
        this.props.onAutoSignIn()
    }

    onClickHandler = (event) => {
        event.preventDefault();
        alert('I was clicked')
    }

    render(){
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
                                <tr>
                                    <td>Coster</td>
                                    <td>20</td>
                                    <td>$7.00</td>
                                    <td>140</td>
                                    <td onClick={this.onClickHandler} ><Button  floatBtn=' btn-floating' btncolour='indigo' btnname='Edit'  iconname='edit'  /></td>
                                </tr>
                                <tr>
                                    <td>Loly</td>
                                    <td>20</td>
                                    <td>$7.00</td>
                                    <td>140</td>
                                    <td><Button floatBtn=' btn-floating'  btncolour='indigo' btnname='Edit'  iconname='edit'  /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h5 align='center' style={{fontSize: '19px', paddingTop: '40px'}} >Total Price : 30,000</h5>
                </div>
            </Aux>
        )
    }
}


const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

const mapPropsToState = dispatch => {
    return {
        onAutoSignIn: () => { dispatch(checkAuthState()) }
    }
}

export default connect(mapStateToProps, mapPropsToState)(ViewProducts);