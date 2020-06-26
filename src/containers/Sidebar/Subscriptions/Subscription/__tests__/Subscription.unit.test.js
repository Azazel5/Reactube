import React from 'react'
import { shallow } from 'enzyme'
import Subscription from '../Subscription'

describe('<Subscription />', () => {
    test('renders empty <Subscription /> item', () => {
        const wrapper = shallow(<Subscription />)
        expect(wrapper).toMatchSnapshot()
    })

    test('renders broadcasting <Subscription /> item', () => {
        const wrapper = shallow(<Subscription broadcasting label="MyBroadcast"/>)
        expect(wrapper).toMatchSnapshot()
    })

    test('renders non-broadcasting <Subscription /> item', () => {
        const wrapper = shallow(<Subscription amountVideos={7} label="MyBroadcast"/>)
        expect(wrapper).toMatchSnapshot()
    })
})