import React from 'react'
import PropTypes from 'prop-types'
import SearchResult from './SearchResult';
import './SearchResults.css'

class SearchResults extends React.Component {

    resultRows() {
        const {
            results,
            rowClick
            } = this.props;
        return <div>{
            results.map((result, index) => {
                return <SearchResult key={index}
                                     onClick={() => rowClick(index)}
                                     {...result} />
            })
        }
        </div>;
    }
    render() {
        const {
            shown,
            results,
            displayClick
            } = this.props;
        return (
            <div>
                {
                    results.length !== 0 ?
                        <div>
                            <div>
                                <button className="Button-Link" onClick={displayClick}>{shown ? 'Hide Results' : 'Show Results'}</button>
                            </div>
                            { shown && this.resultRows() }
                            { shown && <div>
                                <button className="Button-Link" onClick={displayClick}>{shown ? 'Hide Results' : 'Show Results'}</button>
                            </div>}
                        </div> :
                        <div>
                            No results found, please try again with a different search
                        </div>
                }
            </div>);
    }
}

SearchResults.propTypes = {
    shown: PropTypes.bool,
    results: PropTypes.array,
    rowClick: PropTypes.func.isRequired,
    displayClick: PropTypes.func.isRequired
};

export default SearchResults;