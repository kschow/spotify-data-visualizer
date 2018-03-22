import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import { searchSpotifyApi } from '../../state/SearchResults/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (e) => {
            e.preventDefault();
            const searchText = e.target.searchText.value;
            const searchType = e.target.searchType.value;
            dispatch(searchSpotifyApi(searchText, searchType));
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