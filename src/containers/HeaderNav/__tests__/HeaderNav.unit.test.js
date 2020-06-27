import React from 'react'
import HeaderNav from '../HeaderNav'
import {shallow} from 'enzyme'

// Running these tests will create a __snapshots__ directory in your cwd. 
// If you add code and snapshots fail, just delete them and run tests again to create new 
// snapshots. 
test('renders headernav', () => {
    const wrapper = shallow(<HeaderNav />)
    expect(wrapper).toMatchSnapshot()
})