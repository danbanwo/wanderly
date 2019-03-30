import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { routerMiddleware, push } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import allreducers from reducers folder
import allReducers from '../reducers'

const browser = routerMiddleware(browserHistory)
const middleware = applyMiddleware(logger(), promise(), thunk, browser);
const initialize = JSON.parse(sessionStorage.getItem('Wanderly')) || {};
const store = createStore(allReducers, initialize, middleware);

store.subscribe(() => {
  sessionStorage.setItem('Wanderly', JSON.stringify(store.getState()));
})


//export store for use in the entry file
export default store;
