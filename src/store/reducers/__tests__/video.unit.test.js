// We are mocking the API response and success state data as we don't actually want tests to reach out to 
// any server. 

import videoReducer from '../video'
import { MOST_POPULAR } from '../../actions/video'
import { SUCCESS } from '../../actions'
import mostPopularResponse from './responses/MOST_POPULAR_SUCCESS.json'
import mostPopularSuccessState from './states/MOST_POPULAR_SUCCESS.json'

const initialState = {
    byId: {},
    mostPopular: {},
};

describe('video reducer', () => {
    test('undefined action type and state with video reducer', () => {
        const unusedActionType = 'unused-action-type';
        const expectedEndState = {...initialState}
        expect(videoReducer(undefined, {type: unusedActionType})).toEqual(expectedEndState)
    })

    // We must use the spread operator and check if the reducer throws away existing data
    test('MOST_POPULAR action type in the video reducer', () => {
        const startState = {...initialState}
        const action = {
            type: MOST_POPULAR[SUCCESS],
            response: mostPopularResponse
        }

        const expectedEndState = {
            ...startState, 
            ...mostPopularSuccessState
        }

        expect(videoReducer(startState, action)).toEqual(expectedEndState)
    })
})
