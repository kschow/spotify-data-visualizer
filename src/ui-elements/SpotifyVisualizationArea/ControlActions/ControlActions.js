import React from 'react'
import PropTypes from 'prop-types'
import { AUDIO_FEATURES } from '../../../state/TrackInfo/util'

const ControlActions = ({ visualizationType, feature, xAxis, yAxis,
    onVisualizationChange, onFeatureChange, onChangeX, onChangeY }) => (
    <div>
        <label>
            Visualization Type
            <select name="visualizationType"
                    value={visualizationType}
                    onChange={(e) => onVisualizationChange(e.target.value)}>
                <option value="scatter">Scatter Plot</option>
                <option value="bar">Bar Chart</option>
            </select>
        </label>

        { visualizationType === 'bar' ?
            <div>
                <label>
                    Feature
                    <select name="feature"
                            value={feature}
                            onChange={(e) => onFeatureChange(e.target.value)}>
                        {
                            Object.keys(AUDIO_FEATURES).map((key) => {
                                return <option key={key} value={key}>{AUDIO_FEATURES[key].displayName}</option>
                            })
                        }
                    </select>
                </label>
            </div> : null
        }
        { visualizationType === 'scatter' ?
            <div>
                <label>
                    X axis
                    <select name="x"
                            value={xAxis}
                            onChange={(e) => onChangeX(e.target.value)}>
                        {
                            Object.keys(AUDIO_FEATURES).map((key) => {
                                return <option key={key} value={key}>{AUDIO_FEATURES[key].displayName}</option>
                            })
                        }
                    </select>
                </label>

                <label>
                    Y axis
                    <select name="y"
                            value={yAxis}
                            onChange={(e) => onChangeY(e.target.value)}>
                        {
                            Object.keys(AUDIO_FEATURES).map((key) => {
                                return <option key={key} value={key}>{AUDIO_FEATURES[key].displayName}</option>
                            })
                        }
                    </select>
                </label>
            </div> : null }
    </div>
);

ControlActions.propTypes = {
    visualizationType: PropTypes.string.isRequired,
    feature: PropTypes.string.isRequired,
    xAxis: PropTypes.string.isRequired,
    yAxis: PropTypes.string.isRequired,
    onVisualizationChange: PropTypes.func.isRequired,
    onFeatureChange: PropTypes.func.isRequired,
    onChangeX: PropTypes.func.isRequired,
    onChangeY: PropTypes.func.isRequired
};

export default ControlActions;