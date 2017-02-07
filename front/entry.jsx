import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

//import the Redux store
import store from './store/store'

//import the routes folder
import Routes from './routes/routes';




render(
<Provider store={store}>
  <Routes />
</Provider>,
  document.getElementById('root')
)
