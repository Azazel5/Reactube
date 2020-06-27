import React from 'react'
import {shallow} from 'enzyme'
import VideoInfoBox from '../VideoInfoBox'

describe('<VideoInfoBox />', () => {
    test('renders <VideoInfoBox /> collapsed', () => {
        const wrapper = shallow(<VideoInfoBox />)
        expect(wrapper).toMatchSnapshot()
    })

    test('renders <VideoInfoBox /> opened', () => {
        const wrapper = shallow(<VideoInfoBox />)
        wrapper.setState({collapsed: false})
        expect(wrapper).toMatchSnapshot()
    })
})