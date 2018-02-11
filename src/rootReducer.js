import { combineReducers } from 'redux'
import { SearchResults } from './state/SearchResults/reducers'
import { TrackInfo } from './state/TrackInfo/reducers'

export const rootReducer = combineReducers({
    SearchResults,
    TrackInfo
});