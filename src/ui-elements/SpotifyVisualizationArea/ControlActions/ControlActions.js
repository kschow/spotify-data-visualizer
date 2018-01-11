import React from 'react'
import PropTypes from 'prop-types'

const ControlActions = ({ xAxis, yAxis, onChangeX, onChangeY }) => (
    <div>
        <label>
            X axis
            <select name="x"
                    value={xAxis}
                    onChange={(e) => onChangeX(e.target.value)}>
                <option value="loudness">loudness</option>
                <option value="energy">energy</option>
                <option value="key">key</option>
                <option value="mode">mode</option>
                <option value="acousticness">acousticness</option>
                <option value="speechiness">speechiness</option>
                <option value="instrumentalness">instrumentalness</option>
                <option value="liveness">liveness</option>
                <option value="valence">valence</option>
                <option value="tempo">tempo</option>
                <option value="danceability">danceability</option>
                <option value="trackNumber">track number</option>
                <option value="durationMs">duration (ms)</option>
                <option value="timeSignature">time signature</option>
                <option value="popularity">popularity</option>
            </select>
        </label>

        <label>
            Y axis
            <select name="y"
                    value={yAxis}
                    onChange={(e) => onChangeY(e.target.value)}>
                <option value="loudness">loudness</option>
                <option value="energy">energy</option>
                <option value="key">key</option>
                <option value="mode">mode</option>
                <option value="acousticness">acousticness</option>
                <option value="speechiness">speechiness</option>
                <option value="instrumentalness">instrumentalness</option>
                <option value="liveness">liveness</option>
                <option value="valence">valence</option>
                <option value="tempo">tempo</option>
                <option value="danceability">danceability</option>
                <option value="trackNumber">track number</option>
                <option value="durationMs">duration (ms)</option>
                <option value="timeSignature">time signature</option>
                <option value="popularity">popularity</option>
            </select>
        </label>
    </div>
);

ControlActions.propTypes = {
    x: PropTypes.string,
    y: PropTypes.string,
    onChangeX: PropTypes.func.isRequired,
    onChangeY: PropTypes.func.isRequired
};

export default ControlActions;