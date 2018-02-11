import fetch from 'cross-fetch'

export const REQUEST_SEARCH_SPOTIFY_API = 'REQUEST_SEARCH_SPOTIFY_API';
export const RECEIVE_SEARCH_SPOTIFY_API = 'RECEIVE_SEARCH_SPOTIFY_API';
export const TOGGLE_SHOWN = 'TOGGLE_SHOWN';
export const HIDE_SHOWN = 'HIDE_SHOWN';

function requestSearchSpotifyApi(searchText) {
    return {
        type: REQUEST_SEARCH_SPOTIFY_API,
        searchText
    }
}

export function receiveSearchSpotifyApi(searchText, json) {
    return {
        type: RECEIVE_SEARCH_SPOTIFY_API,
        searchText,
        results: json === null ? [] : JSON.parse(json),
        receivedAt: Date.now()
    }
}

export function toggleShown() {
    return {
        type: TOGGLE_SHOWN
    }
}

export function hideShown() {
    return {
        type: HIDE_SHOWN
    }
}

export function searchSpotifyApi(searchText) {
    return (dispatch) => {
        dispatch(requestSearchSpotifyApi(searchText));
        return fetch(`http://localhost:8080/search/artist?search=${searchText}`)
            .then(function(response) {
                if (response.status === 200) {
                    return response._bodyText;
                } else {
                    let error = new Error(response.statusText);
                    error.response = response;
                    console.log(error);
                    return null;
                }
            })
            .then(json => dispatch(receiveSearchSpotifyApi(searchText, json)))
    }
}