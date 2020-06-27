import React from 'react'
import {shallow} from 'enzyme'
import VideoMetadata from '../VideoMetadata'

describe('<VideoMetadata />', () => {
    test('renders <VideoMetadata />', () => {
        const wrapper = shallow(<VideoMetadata />)
        expect(wrapper).toMatchSnapshot()
    })

    test('renders <VideoMetadata /> with viewCount prop', () => {
        const wrapper = shallow(<VideoMetadata viewCount={10000}/>)
        expect(wrapper).toMatchSnapshot()
    })
})