import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({ onSubmit }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
            <input type='text'
                   placeholder='search artists'
                   name="searchText"
                   ref={ (searchText) => this.input = searchText } />
            <input type="submit" value='Search'/>
            </form>
        </div>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default SearchBar;