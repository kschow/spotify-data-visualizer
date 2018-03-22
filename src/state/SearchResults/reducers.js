import { REQUEST_SEARCH_SPOTIFY_API,
    RECEIVE_SEARCH_SPOTIFY_API,
    CHANGE_SEARCH_TYPE,
    TOGGLE_SHOWN,
    HIDE_SHOWN } from './actions'

const initialState = {
    isFetching: false,
    shown: false,
    searchType: 'artist',
    results: []
};

export function SearchResults(state = initialState, action) {
    switch(action.type) {
        case REQUEST_SEARCH_SPOTIFY_API:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_SEARCH_SPOTIFY_API:
            return {
                ...state,
                isFetching: false,
                shown: true,
                results: action.results,
                receivedAt: action.receivedAt
            };
        case CHANGE_SEARCH_TYPE:
            return {
                ...state,
                searchType: action.searchType
            };
        case TOGGLE_SHOWN:
            return {
                ...state,
                shown: !state.shown
            };
        case HIDE_SHOWN:
            return {
                ...state,
                shown: false
            };
        default:
            return state;
    }
}