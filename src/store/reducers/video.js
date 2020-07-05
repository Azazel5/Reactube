import { MOST_POPULAR } from '../actions/video';
import { SUCCESS } from '../actions';
import { createSelector } from 'reselect'

const initialState = {
  byId: {},
  mostPopular: {},
};

export default function videos(state = initialState, action) {
  switch (action.type) {
    case MOST_POPULAR[SUCCESS]:
      return reduceFetchMostPopularVideos(action.response, state);
    default:
      return state;
  }
}

function reduceFetchMostPopularVideos(response, prevState) {
  const videoMap = response.items.reduce((accumulator, video) => {
    accumulator[video.id] = video;
    return accumulator;
  }, {});

  let items = Object.keys(videoMap);
  if (response.hasOwnProperty('prevPageToken') && prevState.mostPopular) {
    items = [...prevState.mostPopular.items, ...items];
  }

  const mostPopular = {
    totalResults: response.pageInfo.totalResults,
    nextPageToken: response.nextPageToken,
    items,
  };

  return {
    ...prevState,
    mostPopular,
    byId: { ...prevState.byId, ...videoMap },
  };
}
 
/**
 * Reselect (calculate derived data from state): reccommended by Dan Abramov
 * This application's video state has been divided into a list of videos and a list of ids for
 * the sake of data normalization, which is why we get videos by id and mostPopular seperately
 * and index into videosById. We do state.videos because we've used combineReducers. 
 */
export const getMostPopularVideos = createSelector(
  (state) => state.videos.byId,
  (state) => state.videos.mostPopular,
  (videosById, mostPopular) => {
    if (!videosById || !mostPopular.items) {
      return []
    }

    return mostPopular.items.map(videoId => videosById[videoId])
  }
)