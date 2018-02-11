import { REQUEST_SPOTIFY_SONG_INFO,
    RECEIVE_SPOTIFY_SONG_INFO,
    CHANGE_VISUALIZATION_TYPE,
    ON_FEATURE_CHANGE,
    ON_SELECT_CHANGE_X,
    ON_SELECT_CHANGE_Y } from './actions'

import { AUDIO_FEATURES } from './util'
import { cloneDeep } from 'lodash/lang'

const initialState = {
    isFetching: false,
    results: { },
    visualizationType: 'bar',
    xAxis: 'energy',
    yAxis: 'loudness',
    feature: 'loudness'
};

function transformTracksBox(data, feature) {
    let buckets = Object.values(data.results.tracks).map(AUDIO_FEATURES[feature].mapFunction)
        .reduce(AUDIO_FEATURES[feature].reduceFunction,
            cloneDeep(AUDIO_FEATURES[feature].buckets));
    return Object.values(buckets);
}

function transformTracksScatter(data) {
    return Object.values(data.results.tracks);
}

function transformTracks(data, visualizationType, feature) {
    switch(visualizationType) {
        case 'bar':
            return transformTracksBox(data, feature);
        case 'scatter':
            return transformTracksScatter(data);
        default:
            return transformTracksScatter(data);
    }
}

export function TrackInfo(state = initialState, action) {
    switch(action.type) {
        case CHANGE_VISUALIZATION_TYPE: {
            let data = transformTracks(state, action.selected, state.feature);
            console.log(data);
            return {
                ...state,
                visualizationType: action.selected,
                data: data
            };
        }
        case ON_FEATURE_CHANGE: {
            let data = transformTracksBox(state, action.selected);
            console.log(data);
            return {
                ...state,
                feature: action.selected,
                data: data
            }
        }
        case ON_SELECT_CHANGE_X:
            return {
                ...state,
                xAxis: action.selected
            };
        case ON_SELECT_CHANGE_Y:
            return {
                ...state,
                yAxis: action.selected
            };

        case REQUEST_SPOTIFY_SONG_INFO:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_SPOTIFY_SONG_INFO:
            let data = transformTracks(action, state.visualizationType, state.feature);
            console.log(data);
            return {
                ...state,
                isFetching: false,
                results: action.results,
                receivedAt: action.receivedAt,
                data: data
            };
        default:
            return state;
    }
}
