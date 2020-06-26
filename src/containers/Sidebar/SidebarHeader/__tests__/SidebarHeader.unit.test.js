import React from 'react'
import {shallow} from 'enzyme'
import SidebarHeader from '../SidebarHeader'

describe('<SidebarHeader />', () => {
    test('renders <SidebarHeader /> with no props title', () => {
        const wrapper = shallow(<SidebarHeader />)
        expect(wrapper).toMatchSnapshot()
    })

    test('renders <SidebarHeader /> with no \'Sample Title\' title', () => {
        const wrapper = shallow(<SidebarHeader title='Sample Title'/>)
        expect(wrapper).toMatchSnapshot()
    })
})