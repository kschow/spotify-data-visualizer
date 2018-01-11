import fetch from 'cross-fetch'

import { hideShown } from '../SearchResults/actions'
export const REQUEST_SPOTIFY_SONG_INFO = 'REQUEST_SPOTIFY_SONG_INFO';
export const RECEIVE_SPOTIFY_SONG_INFO = 'RECEIVE_SPOTIFY_SONG_INFO';

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
        const spotifyId = getState().searchResults.results[resultIndex].spotifyId;
        dispatch(requestSpotifySongInfo(spotifyId));
        return fetch(`http://localhost:8080/getArtistInfo/${spotifyId}`)
            .then(
                response => response._bodyText,
                error => console.log('An error occurred. ', error)
            )
            .then(json => dispatch(receiveSpotifySongInfo(spotifyId, json)))
            .then(() => dispatch(hideShown()))
    }
}
