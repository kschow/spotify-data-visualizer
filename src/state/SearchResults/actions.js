import fetch from 'cross-fetch'

export const REQUEST_SEARCH_SPOTIFY_API = 'REQUEST_SEARCH_SPOTIFY_API';
export const RECEIVE_SEARCH_SPOTIFY_API = 'RECEIVE_SEARCH_SPOTIFY_API';
export const CHANGE_SEARCH_TYPE = 'CHANGE_SEARCH_TYPE';
export const TOGGLE_SHOWN = 'TOGGLE_SHOWN';
export const HIDE_SHOWN = 'HIDE_SHOWN';

function requestSearchSpotifyApi(searchText, searchType) {
    return {
        type: REQUEST_SEARCH_SPOTIFY_API,
        searchText,
        searchType
    }
}

export function receiveSearchSpotifyApi(json) {
    return {
        type: RECEIVE_SEARCH_SPOTIFY_API,
        results: json === null ? [] : JSON.parse(json),
        receivedAt: Date.now()
    }
}

function changeSearchType(searchType) {
    return {
        type: CHANGE_SEARCH_TYPE,
        searchType
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

export function searchSpotifyApi(searchText, searchType) {
    return (dispatch) => {
        dispatch(requestSearchSpotifyApi(searchText));
        dispatch(changeSearchType(searchType));
        return fetch(`${process.env.REACT_APP_ROOT_API_URL}/search/${searchType}?search=${searchText}`)
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
            .then(json => dispatch(receiveSearchSpotifyApi(json)))
    }
}