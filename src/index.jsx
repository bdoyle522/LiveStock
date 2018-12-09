import React from 'react';
import { render } from 'react-dom'
import './app.scss';
import AppMain from './Components/App';
import 'bootstrap';
import $ from 'jquery';
import Popper from 'popper.js';
import { Provider, connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom'; 
import rootReducer from './Reducers/main';

import * as Actions from './Actions/main';

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

const mapStateToProps = (state) => {
    return state.main.toObject();
}

const store = createStore(rootReducer)

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
//registerServiceWorker();