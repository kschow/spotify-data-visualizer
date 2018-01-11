import React from 'react'
import PropTypes from 'prop-types'
import SearchResult from './SearchResult';
import './SearchResults.css'

const SearchResults = ({ shown, results, rowClick, displayClick }) => (
    <div>
        <div>
            <a href="#" onClick={displayClick}>{shown ? 'Hide Results' : 'Show Results'}</a>
        </div>
        {
            shown && <div>{
                results.map((result, index) => {
                    return <SearchResult key={index}
                                         onClick={() => rowClick(index)}
                                         {...result} />
                })
            }</div>
        }
    </div>
);

SearchResults.propTypes = {
    shown: PropTypes.bool.isRequired,
    results: PropTypes.array.isRequired,
    rowClick: PropTypes.func.isRequired,
    displayClick: PropTypes.func.isRequired
};

export default SearchResults;