import fetch from 'cross-fetch'
import { startCase } from 'lodash/string'

export const REQUEST_SPOTIFY_SONG_INFO = 'REQUEST_SPOTIFY_SONG_INFO';
export const RECEIVE_SPOTIFY_SONG_INFO = 'RECEIVE_SPOTIFY_SONG_INFO';
export const CHANGE_VISUALIZATION_TYPE = 'CHANGE_VISUALIZATION_TYPE';
export const ON_FEATURE_CHANGE =  'ON_FEATURE_CHANGE';
export const ON_SELECT_CHANGE_X = 'ON_SELECT_CHANGE_X';
export const ON_SELECT_CHANGE_Y = 'ON_SELECT_CHANGE_Y';

export function changeVisualizationType(selected) {
    return {
        type: CHANGE_VISUALIZATION_TYPE,
        selected
    }
}

export function onFeatureChange(selected) {
    return {
        type: ON_FEATURE_CHANGE,
        selected
    }
}

export function onSelectChangeX(selected) {
    return {
        type: ON_SELECT_CHANGE_X,
        selected
    }
}

export function onSelectChangeY(selected) {
    return {
        type: ON_SELECT_CHANGE_Y,
        selected
    }
}

function requestSpotifySongInfo(spotifyId) {
    return {
        type: REQUEST_SPOTIFY_SONG_INFO,
        spotifyId
    }
}

export function receiveSpotifySongInfo(spotifyId, json) {
    return {
        type: RECEIVE_SPOTIFY_SONG_INFO,
        spotifyId,
        results: JSON.parse(json),
        receivedAt: Date.now()
    }
}

export function getSongInfo(resultIndex) {
    return (dispatch, getState) => {
        const playlistString = 'Playlist';
        const searchType = startCase(getState().SearchResults.searchType);
        const spotifyId = getState().SearchResults.results[resultIndex].spotifyId;
        const userId = searchType === playlistString ? getState().SearchResults.results[resultIndex].userId : null;

        const fetchUrlBase = `http://localhost:8080/get${searchType}Tracks/`;
        const pathVars = searchType === playlistString ? `${userId}/${spotifyId}` : `${spotifyId}`;

        dispatch(requestSpotifySongInfo(spotifyId));
        return fetch(fetchUrlBase + pathVars)
            .then(
                response => response._bodyText,
                error => console.log('An error occurred. ', error)
            )
            .then(json => dispatch(receiveSpotifySongInfo(spotifyId, json)))
    }
}
