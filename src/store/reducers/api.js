import {YOUTUBE_LIBRARY_LOADED} from '../actions/api';

const initialState = {
  libraryLoaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case YOUTUBE_LIBRARY_LOADED:
      return {
        libraryLoaded: true,
      };
    default:
      return state;
  }
}

// This is a selector. It is a sort of getter we use to get access to the state. 
export const getYoutubeLibrary = (state) => state.api.libraryLoaded;