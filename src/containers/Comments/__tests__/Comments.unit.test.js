import React from 'react'
import {shallow} from 'enzyme'
import Comments from '../Comments'

describe('<Comments />', () => {
    test('renders <Comments />', () => {
        const wrapper = shallow(<Comments />)
        expect(wrapper).toMatchSnapshot()
    })

    test('renders <Comments /> with a amountComments prop', () => {
        const wrapper = shallow(<Comments amountComments={123}/>)
        expect(wrapper).toMatchSnapshot()
    })
})