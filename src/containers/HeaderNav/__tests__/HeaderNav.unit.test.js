import React from 'react'
import HeaderNav from '../HeaderNav'
import {shallow} from 'enzyme'

// Running these tests will create a __snapshots__ directory in your cwd. 
test('renders headernav', () => {
    const wrapper = shallow(<HeaderNav />)
    expect(wrapper).toMatchSnapshot()
})