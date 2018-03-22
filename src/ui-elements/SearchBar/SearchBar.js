import React from 'react'
import PropTypes from 'prop-types'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchType: 'artist'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { onSubmit } = this.props;
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input type='text'
                           placeholder={`search ${this.state.searchType}s`}
                           name='searchText'
                           value={this.state.searchText}
                           onChange={this.handleInputChange} />
                    <select name='searchType'
                            value={this.state.searchType}
                            onChange={this.handleInputChange}>
                        <option value='artist'>Artist</option>
                        <option value='playlist'>Playlist</option>
                    </select>

                    <input type="submit" value='Search'/>
                </form>
            </div>
        );
    }
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default SearchBar;