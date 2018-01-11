import { REQUEST_SEARCH_SPOTIFY_API,
    RECEIVE_SEARCH_SPOTIFY_API,
    TOGGLE_SHOWN,
    HIDE_SHOWN } from './actions'

const initialState = {
    isFetching: false,
    shown: false,
    results: []
};

export function searchResults(state = initialState, action) {
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