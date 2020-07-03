import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Bone from './containers/Bone/Bone';
import home from './containers/pages/Home/Home';
import Signup from './containers/pages/Auth/Signup/Signup';
import Signin from './containers/pages/Auth/Signin/Signin';
import AddProduct from './containers/pages/Store/AddProduct';
import ViewProducts from './containers/pages/Store/ViewProducts';
import EditProduct from './containers/pages/Store/Edit-product';
import Logout from './containers/pages/Auth/Logout/Logout';
import NewSales from './containers/pages/Sales/NewSales';
import ViewSales from './containers/pages/Sales/ViewSales';
import './App.css';

function App() {
  return (
    <div>
      <Bone>
        <div className="App-header">
          <Switch>
              <Route path='/register' component={Signup}  />
              <Route path='/login' component={Signin} />
              <Route path='/add-product' component={AddProduct} />
              <Route path='/view-products' component={ViewProducts}  />
              <Route path='/edit-product' component={EditProduct} />
              <Route path='/logout' component={Logout} />
              <Route path='/new-sale' component={NewSales} />
              <Route path='/sales' component={ViewSales} />
              <Route path='/' exact component={home} />
          </Switch>
        </div>
          
      </Bone>
    </div>
  );
}

export default App;
