import { connect } from 'react-redux'
import SearchResults from './SearchResults'
import { toggleShown } from './actions'
import { getSongInfo } from '../SpotifyVisualizationArea/actions'

const mapStateToProps = (state) => {
    return {
        shown: state.searchResults.shown,
        results: state.searchResults.results
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        rowClick: (id) => {
            dispatch(getSongInfo(id));
        },
        displayClick: () => {
            dispatch(toggleShown())
        }
    }
};

const SearchResultsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
) (SearchResults);

export default SearchResultsContainer;
