import React from 'react'
import {shallow} from 'enzyme'
import CommentsHeader from '../CommentsHeader'

describe('<CommentsHeader />', () => {
    test('renders <CommentsHeader />', () => {
        const wrapper = shallow(<CommentsHeader />)
        expect(wrapper).toMatchSnapshot()
    })

    test('renders <CommentsHeader /> with a amountComments prop', () => {
        const wrapper = shallow(<CommentsHeader amountComments={123}/>)
        expect(wrapper).toMatchSnapshot()
    })
})