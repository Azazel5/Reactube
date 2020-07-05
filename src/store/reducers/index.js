import apiReducer from './api'
import videosReducer from './video'
import {combineReducers} from 'redux'

/** 
 * Redux-thunk is pretty nice if you have simple API calls in you application. However, considering 
 * shifting to redux-saga whenever needed, as it seems to solve those problems. 
*/

export default combineReducers({
    api: apiReducer, 
    videos: videosReducer
})
