import React from 'react'
import {shallow} from 'enzyme'
import AppLayout from '../AppLayout'

describe('<AppLayout />', () => {
    test('renders <AppLayout />', () => {
        const wrapper = shallow(<AppLayout />)
        expect(wrapper).toMatchSnapshot() 
    })

    test('renders <AppLayout /> with one children', () => {
        const wrapper = shallow(
            <AppLayout>
                <div>One child</div>
            </AppLayout>
        )
        expect(wrapper).toMatchSnapshot() 
    })

    test('renders <AppLayout /> with multiple children', () => {
        const wrapper = shallow(
            <AppLayout>
                <div>One child</div>
                <div>
                    <span>Two child</span>
                    <p>Red child, Blue child</p>
                </div>
            </AppLayout>
        )
        expect(wrapper).toMatchSnapshot() 
    })

})