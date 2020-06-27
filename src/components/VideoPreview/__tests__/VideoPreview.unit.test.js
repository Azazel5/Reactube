import React from 'react'
import {shallow} from 'enzyme'
import VideoPreview from '../VideoPreview'

describe('<VideoPreview />', () => {
    test('renders <VideoPreview />', () => {
        const wrapper = shallow(<VideoPreview />)
        expect(wrapper).toMatchSnapshot()
    })

    test('renders <VideoPreview /> horizontally', () => {
        const wrapper = shallow(<VideoPreview horizontal/>)
        expect(wrapper).toMatchSnapshot() 
    })

})