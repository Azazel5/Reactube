import React from 'react'
import {shallow} from 'enzyme'
import SidebarItem from '../SidebarItem'

describe('<SidebarItem />', () => {
    test('renders empty <SidebarItem /> item', () => {
        const wrapper = shallow(<SidebarItem />)
        expect(wrapper).toMatchSnapshot()
    })

    test('renders <SidebarItem /> with non-highlighted props', () => {
        const wrapper = shallow(<SidebarItem label='Trending' icon='fire'/>)
        expect(wrapper).toMatchSnapshot()
    })

    test('renders <SidebarItem /> with highlighted props', () => {
        const wrapper = shallow(<SidebarItem highlighted label='Trending' icon='fire'/>)
        expect(wrapper).toMatchSnapshot()
    })
})