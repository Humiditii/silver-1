import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../../components/Button/Button';
import M from 'materialize-css';

class Home extends Component {
    componentDidMount(){
        M.AutoInit()
    }
   render(){
    return (
        <Aux>
            <div align='center' style={{marginRight: '10px', marginLeft: '10px'}} >
                <h5>Welcome to <i style={{color: 'indigo'}} >SILVER-1</i> App</h5>
                <div style={{fontSize: '20px', minHeight:'25vh', marginBottom: '60px'}} >
                   <p>This application helps to monitor goods appropriately. <i className="material-icons small">shopping_cart</i></p><i className="large material-icons">insert_chart</i>
                   <p>Human error is inevitable in huge transactions, though computers may not be  <i><b>100% perfect sometimes <i className="material-icons tiny">cloud_done</i></b></i>, however it is still the best solution to save humans from uneccessary stress <i className="material-icons small">sentiment_very_satisfied</i> .</p> <p> Read through the Features and enjoy <i className="material-icons small">add</i></p> <p style={{font: '10px'}} > Version 1.0.0  <i className="material-icons small">thumb_up</i></p>
                </div>

                <div style={{fontSize: '17px', minHeight:'25vh'}} >
                    <h4> <i> Features </i> </h4>

                    <div className='container-fluid'  >
                           <div>
                              
                            <ul className="collapsible popout" data-collapsible="accordion">
                                <li className='active' >
                                <div style={{color:'black'}} className="collapsible-header active"><i className="material-icons">account_circle</i>Authentication and Authorization</div>
                                <div className="collapsible-body"><span> Get authenticated and authorized to be able to perform any process on this application. New users are required to click the get started button or from the side nav to get themselves registered. Registered Users can proceed to login. Any unauthorized request won't be allowed</span></div>
                                </li>
                                <li>
                                <div style={{color:'black'}} className="collapsible-header"><i className="material-icons">add_circle</i>Add products to Store</div>
                                <div className="collapsible-body"><span>Authorized User Administrator will be able to add new products to store, fully described by Price, Quantity and Name, then the application does the remaining automation and computation it self.</span></div>
                                </li>
                                <li>
                                <div style={{color:'black'}} className="collapsible-header"><i className="material-icons">edit</i>Edit Products</div>
                                <div className="collapsible-body"><span>Authorized Administrator can click the edit button in front of the product to be edited/updated, then save the process.</span></div>
                                </li>
                                <li>
                                <div style={{color:'black'}} className="collapsible-header"><i className="material-icons">desktop_mac</i>View Products</div>
                                <div className="collapsible-body"><span>Authorized Administrator can view the list of products available in the store with their respective prices, quantity and the sum of respective prices.</span></div>
                                </li>
                                <li>
                                <div style={{color:'black'}} className="collapsible-header"><i className="material-icons">shop</i>Sell Item</div>
                                <div className="collapsible-body"><span>Authorized Administrator will be able to sell list of available products in the store, requesting from the product name, quantity.</span></div>
                                </li>
                                <li>
                                <div style={{color:'black'}} className="collapsible-header"><i className="material-icons">import_contacts</i>View Transactions record</div>
                                <div className="collapsible-body"><span>Authorized Administrator will be able to view records of sold items, specifying the date range else the application pick the present date automatically.</span></div>
                                </li>
                                <li>
                                <div style={{color:'black'}} className="collapsible-header"><i className="material-icons">add</i>Install Application record</div>
                                <div className="collapsible-body"><span>This application can be usd through a browser (Desktop, Mobile). If you are still viewing it from the browser, why not install it as a Progressive Web Application on Your mobile device. To get that done, visit the web page, click options on the top right conner, then tick add to home screen, OK.
                                    </span></div>
                                </li>
                            </ul>
                           </div>
                        </div>

                </div>

                <div align='center' style={{paddingTop: '30px', marginBottom: '20px'}} >
                    <Button btncolour='indigo' btnname='Get Started' actionType='link' iconname='directions_bike' whereto='/register' />
                </div>
            </div>
        </Aux>
    );
   }
}

export default Home