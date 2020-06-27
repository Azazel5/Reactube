import React from 'react'
import {shallow} from 'enzyme'
import Video from '../Video'

describe('<Video />', () => {
    test('renders a <Video /> component with an id', () => {
        const wrapper = shallow(<Video id="some_id"/>)
        expect(wrapper).toMatchSnapshot()
    })

    test('renders an empty <Video />', () => {
        const wrapper = shallow(<Video />)
        expect(wrapper).toMatchSnapshot()
    })
})