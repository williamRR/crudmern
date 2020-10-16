import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navigation from './Navigation'

configure({ adapter: new Adapter() })

describe('<Navigation', () => {
	beforeEach(() => {
		let wrapper 

		wrapper = shallow(<Navigation />)
	})

	it('should render one navbar', () => {
		let wrapper 
		wrapper = shallow(<Navigation />)
		expect(wrapper.find('nav')).toHaveLength(1)
	})

})