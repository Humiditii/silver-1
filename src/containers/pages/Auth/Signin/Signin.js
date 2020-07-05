import React, {Component} from 'react';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import Aux from '../../../../hoc/Auxillary';
import {NavLink, Redirect} from 'react-router-dom';
import {signin} from '../../../../store/actions/auth';
import Preloader from '../../../../components/Preloader/Preloader';
import { connect } from 'react-redux';

class Signin extends Component {
    state = {
        businessName: null,
        password: null
    }

    // componentDidMount(){
    //     console.log(this.props)
    // }

    onSubmitHandler = (event) => {
        event.preventDefault()
        const {businessName, password} = this.state;
        this.props.onSignIn(businessName, password)

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
            name: ['Business Name',  'Password'],
            type: ['text',  'password'],
            icon: ['person', 'security'],
            stateItem: ['businessName', 'password']
        }
        let form = (
            <div style={{marginTop: '40px'}} >
                <div align='center' style={{marginBottom: '30px'}} >
                    <h5><u>Login To Your Account</u></h5>  <i className="large material-icons">account_circle</i>
                </div>
                    <h5 align='center' style={{color: 'red', fontSize: '19px'}} >{this.props.error}</h5>
                  
                <form className="col s12" onSubmit={this.onSubmitHandler} >
                            
                            {config.name.map( (item, index) => (
                                <Input key={index} inputid={item} iconname={config.icon[index]}  inputtype={config.type[index]} labelname={item} changed={(event) =>  this.inputHandler(event, config.stateItem[index]) } />
                            ))}
                           
                            <div align='center' >
                            <Button action='submit' btncolour='indigo' btnname='Login'  iconname='directions_bike'  />
                        </div>
                                <div>
                                    <p className=''>Don't have an account?<NavLink  style={{color: 'indigo'}} to='/register' > <u>Register</u></NavLink></p> 
                                </div>
                        </form>
            </div>
        );

        if(this.props.token){
            
            return <Redirect to='/view-products' />
        }
        if(this.props.loading){
            form = <Preloader />
        }

        return (
            <Aux>
                {form}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        error: state.auth.error,
        loading: state.auth.loading,
        // authMsg: state.auth.authMsg
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignIn: (businessName, password) => { dispatch(signin(businessName,password)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);