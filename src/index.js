import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingsReducer = (state=0, action) => {
    if(action.type === 'SUBMIT_FEELING'){
        return action.payload;
    }
    return state;
}


const understandingReducer = (state=0, action) => {
    if(action.type === 'SUBMIT_UNDERSTANDING'){
        return action.payload;
    }
    return state;
}


const supportReducer = (state=0, action) => {
    if(action.type === 'SUBMIT_SUPPORT'){
        return action.payload;
    }
    return state;
}


const commentsReducer = (state='', action) => {
    if(action.type === 'SUBMIT_COMMENT'){
        return action.payload;
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
    }),
    applyMiddleware(logger),
)



ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>   , 
document.getElementById('root'));

registerServiceWorker();
