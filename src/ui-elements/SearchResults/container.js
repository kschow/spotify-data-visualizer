import { connect } from 'react-redux'
import SearchResults from './SearchResults'
import { hideShown, toggleShown } from '../../state/SearchResults/actions'
import { getSongInfo } from '../../state/TrackInfo/actions'

const mapStateToProps = (state) => {
    return {
        shown: state.SearchResults.shown,
        results: state.SearchResults.results
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        rowClick: (id) => {
            dispatch(getSongInfo(id));
            dispatch(hideShown());
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
