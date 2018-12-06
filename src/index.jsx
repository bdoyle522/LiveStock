import React from 'react';
import { render } from 'react-dom'
import './app.scss';
import AppMain from './Components/App';
import 'bootstrap';
import $ from 'jquery';
import Popper from 'popper.js';
import { Provider, connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import rootReducer from './Reducers/main';

import * as Actions from './Actions/main';

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

const mapStateToProps = () => {
    return {

    }
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
          <App />
    </Provider>,   
    document.getElementById('root')   
);
//registerServiceWorker();