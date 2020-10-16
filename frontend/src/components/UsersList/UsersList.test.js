import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import UsersList from './UsersList'
import { Provider } from 'react-redux'
import rootReducer from '../../reducers/rootReducer';
import { createStore } from 'redux';

configure({ adapter: new Adapter() })
const store = createStore(rootReducer);

it('renders no tasks where store is empty', () => {
    const wrapper = shallow(
        <Provider store={store}>
            <UsersList tasks={[]} />
        </Provider>
    )
    expect(wrapper.find(".task").length).toBe(0)
})

// it ('renders two tasks where store has two elements', () => {
//     expect(wrapper.find(".task").length).toBe(2)
// })