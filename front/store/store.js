import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { routerMiddleware, push } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import allreducers from reducers folder
import allReducers from '../reducers'

const browser = routerMiddleware(browserHistory)
const middleware = applyMiddleware(logger(), promise(), thunk, browser);

const store = createStore(allReducers, middleware);


//export store for use in the entry file
export default store;
