import React, {Component} from 'react';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import Aux from '../../../../hoc/Auxillary';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signup, mismatch } from '../../../../store/actions/auth';
import Preloader from '../../../../components/Preloader/Preloader';


class Signup extends Component {
    state = {
        businessName: null,
        email: null,
        password: null,
        confirmPassword: null
    }


    onSubmitHandler = (event) => {
        event.preventDefault();
        const {businessName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword){
            this.props.onMismatch()
        }else{
            this.props.onSignUp(businessName, email, password)
        }


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
            name: ['Business Name','Email',  'Password', 'confirm Password'],
            type: ['text', 'text', 'password', 'password'],
            icon: ['person','mail', 'security', 'security'],
            stateItems: ['businessName', 'email', 'password', 'confirmPassword']
        }
        let form = (
            <div style={{marginTop: '30px'}} >
                <div align='center' style={{marginBottom: '30px'}} >
                   <h5> <b><u>Signup As a New User</u> </b></h5>
                </div>
                <div align='center' style={{font: '17px', color: 'green'}} >
                       {this.props.success?  <p> <i className="small material-icons">done_all</i>{this.props.authMsg}</p> : null }
                    </div>
                <h5 align='center' style={{color: 'red', fontSize: '19px'}} >{this.props.error}</h5>
                <h5 align='center' style={{color: 'red', fontSize: '19px'}} >{this.props.mismatch}</h5>
                <form className="col s12" onSubmit={this.onSubmitHandler} >
                            
                            {config.name.map( (item, index) => (
                                <Input key={index} inputid={item} iconname={config.icon[index]}  inputtype={config.type[index]} labelname={item} changed={(event) =>  this.inputHandler(event, config.stateItems[index]) } />
                            ))}
                           
                            <div align='center' >
                            <Button action='submit' btncolour='indigo' btnname='Register'  iconname='directions_bike'  />
                        </div>
                                <div >
                                    <p style={{fontSize: '15px'}} className=''>Alread have an account?<NavLink  style={{color: 'indigo'}} to='/login' > <u>Login</u></NavLink></p> 
                                </div>
                        </form>
            </div>
        );

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
        loading: state.auth.loading,
        error: state.auth.error,
        authMsg: state.auth.authMsg,
        mismatch : state.auth.mismatch
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (businessName, email, password) => { dispatch( signup(businessName,email, password) ) },
        onMismatch : () => { dispatch(mismatch()) }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);