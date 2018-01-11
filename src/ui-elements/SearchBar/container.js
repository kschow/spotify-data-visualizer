import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import { searchSpotifyApi } from '../SearchResults/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (e) => {
            e.preventDefault();
            dispatch(searchSpotifyApi(e.target.searchText.value));
        }
    }
};

// the mapStateToProps is a dummy function because the SearchBar component doesn't need anything from state
// it however does need the dispatch so it can make the requisite API call
const SearchBarContainer = connect(
    () => { return { } },
    mapDispatchToProps
) (SearchBar);

export default SearchBarContainer;