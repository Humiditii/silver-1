import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import ReactDOM from 'react-dom';
import {HashRouter} from  'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import storeReducer from './store/reducers/store';
import salesReducer from './store/reducers/sales';
import authReducer from './store/reducers/auth';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    cart: storeReducer,
    sales: salesReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


const app = (
 
    <Provider store={store} >
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>

);

ReactDOM.render(app, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
