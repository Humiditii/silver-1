import React, {Component} from 'react';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import Aux from '../../../../hoc/Auxillary';
import {NavLink} from 'react-router-dom';

class Signin extends Component {
    state = {
        businessName: null,
        password: null
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
            name: ['Business Name',  'Password'],
            type: ['text',  'password'],
            icon: ['person', 'security'],
            stateItem: ['businessName', 'password']
        }
        let form = (
            <div style={{marginTop: '40px'}} >
                <div align='center' style={{marginBottom: '30px'}} >
                    <h5><u>Login To Your Account</u></h5>  <i class="large material-icons">account_circle</i>
                </div>
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
        return (
            <Aux>
                {form}
            </Aux>
        )
    }
}


export default Signin;