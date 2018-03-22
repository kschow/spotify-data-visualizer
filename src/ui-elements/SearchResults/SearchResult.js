import React from 'react'

const SearchResult = ({ name, popularity, imageUrls, onClick }) => {
    return (
        <div className="Search-Result">
            <div className="Block Img">
                {imageUrls[0] !== undefined ? <img className='Spotify-Img' alt='' src={imageUrls[0]}/> : null}
            </div>
            <div className="Block Info">
                <div>Name: {name}</div>
                {popularity !== undefined ? <div>Popularity: {popularity}</div> : null}
            </div>
            <div className="Block Submit"><button onClick={onClick}>Select</button></div>
        </div>
    );
};

export default SearchResult;
