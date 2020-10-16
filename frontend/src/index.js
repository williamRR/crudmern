import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import defaultStore from './store'

const rootElement = document.getElementById('root')
const store = defaultStore()

ReactDOM.render(
  <Provider store={store}>
    <App />,
    </Provider>,
  rootElement
);
