import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingsReducer = (state={}, action) => {
    return state;
}


const understandingReducer = (state={}, action) => {
    return state;
}


const supportReducer = (state={}, action) => {
    return state;
}


const commentsReducer = (state={}, action) => {
    return state;
}






ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
