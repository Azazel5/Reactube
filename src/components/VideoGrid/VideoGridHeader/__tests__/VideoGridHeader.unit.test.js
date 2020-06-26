import React from 'react'
import {shallow} from 'enzyme'
import VideoGridHeader from '../VideoGridHeader'

describe('<VideoGridHeader />', () => {
    test('renders <VideoGridHeader /> without props', () => {
        const wrapper = <VideoGridHeader />
        expect(wrapper).toMatchSnapshot()
    })

    test('renders <VideoGridHeader /> with empty title', () => {
        const wrapper = <VideoGridHeader title=""/>
        expect(wrapper).toMatchSnapshot()
    })

    test('renders <VideoGridHeader /> with title', () => {
        const wrapper = <VideoGridHeader title="A title"/>
        expect(wrapper).toMatchSnapshot()
    })
})