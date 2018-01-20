import { combineReducers } from 'redux'
import { searchResults } from './ui-elements/SearchResults/reducers'
import { spotifyVisualizationArea } from './ui-elements/SpotifyVisualizationArea/reducers'

export const rootReducer = combineReducers({
    searchResults,
    spotifyVisualizationArea
});