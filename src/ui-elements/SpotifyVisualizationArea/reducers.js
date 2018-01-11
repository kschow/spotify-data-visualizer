import { REQUEST_SPOTIFY_SONG_INFO, RECEIVE_SPOTIFY_SONG_INFO } from './actions'

const initialState = {
    isFetching: false,
    results: {
        data: { }
    }
};

export function spotifyVisualizationArea(state = initialState, action) {
    switch(action.type) {
        case REQUEST_SPOTIFY_SONG_INFO:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_SPOTIFY_SONG_INFO:
            return {
                ...state,
                isFetching: false,
                results: action.results,
                receivedAt: action.receivedAt
            };
        default:
            return state;
    }
}
