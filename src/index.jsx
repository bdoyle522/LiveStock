import React from 'react';
import { render } from 'react-dom'
import './app.scss';
import AppMain from './Components/App';
import 'bootstrap';
import { Provider, connect } from 'react-redux';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'; 
import rootReducer from './Reducers/main';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

import * as Actions from './Actions/main';

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

const mapStateToProps = (state) => {
    return state.main.toObject();
}

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {pure: false}
)(AppMain);

render(  
    <Provider store={store}>
        <BrowserRouter basename="/">
          <App />       
        </BrowserRouter>
    </Provider>,   
    document.getElementById('root')   
);



// const registerServiceWorker = () => {

//     if('serviceWorker' in navigator) {
//         window.addEventListener('load', () => {
//             navigator.serviceWorker.register('../src/worker_cache.js')
//             .then(reg => console.log(reg))
//             .catch(err => console.log("Error registering service worker: " + err))
//         })
//     } 
// }

// registerServiceWorker();

// if ('serviceWorker' in navigator) {
//     const registration = runtime.register();
// }