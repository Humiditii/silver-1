import React, {Component} from 'react';
import Aux from '../../../hoc/Auxillary';


class Footer extends Component {

    render(){
        return (
            <Aux>
                <div className="page-footer  indigo lighten-1">
                    
                    <div className="footer-copyright">
                        <div className="container" align='center'>

                        Developed by Sebago <i class="tiny material-icons">copyright</i> {new Date().getFullYear()} Copyright
                        
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Footer;
