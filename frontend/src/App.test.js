import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import App from './App'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
// import store from './store'
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})
