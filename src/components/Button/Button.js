import React from 'react';
import Aux from '../../hoc/Auxillary';
import {NavLink, withRouter} from 'react-router-dom'

const button = props => {
    const btnStyles = ['btn waves-effect waves btn-small ', 'material-icons left']
    const btnColour = props.btncolour;
    btnStyles[0] = btnStyles[0] + btnColour + ' ' + props.floatBtn ;
    let button = (
            <button onClick={props.buttonClick} type={props.action} className={btnStyles[0]} data-target={props.dataTarget} >
                <i className={btnStyles[1]}>{props.iconname}</i>{props.btnname}
            </button>
    );

    if (props.actionType === 'link' ){
        button = (
            <NavLink  type={props.action} to={props.whereto} className={ btnStyles[0] }>
            <i className={btnStyles[1]}>{props.iconname}</i>{props.btnname}</NavLink>
        );
    }
    return (
        <Aux>
            {button}
        </Aux>
    );
}

export default withRouter(button);