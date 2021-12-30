import { createStore, applyMiddleware , combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/auth.reducer'
import { channelDetailsReducer } from './reducers/channel.action'
import { commentListReducer } from './reducers/comments.reducer'
import { channelVideosReducer, homeVideosReducer, likedVideosReducer, rateVideosReducer, relatedVideoReducer, searchedVideosReducer, selectedVideoReducer, subscriptionsChannelReducer } from './reducers/videos.reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentList: commentListReducer,
    relatedVideos: relatedVideoReducer,
    searchedVideos: searchedVideosReducer,
    subscriptionsChannel: subscriptionsChannelReducer,
    channelVideos: channelVideosReducer,
    likedVideos: likedVideosReducer,
    rateVideos: rateVideosReducer,
})

const store = createStore(
    rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store