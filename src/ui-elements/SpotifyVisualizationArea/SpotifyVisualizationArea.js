import React from 'react'
import './SpotifyVisualizationArea.css'
import ControlActionsContainer from './ControlActions/container'
import VizBar from './Charts/VizBar'
import VizScatter from './Charts/VizScatter'

class SpotifyVisualizationArea extends React.Component {
    render() {
        const {
            visualizationType,
            feature,
            xAxis,
            yAxis,
            data
            } = this.props;
        let chart;
        if (visualizationType === 'bar') {
            chart = <VizBar data={data} feature={feature} />
        } else {
            chart = <VizScatter data={data} xAxis={xAxis} yAxis={yAxis} />
        }
        return (
            <div>
                {
                    data !== undefined ?
                        <div>
                            <ControlActionsContainer />
                            {chart}
                        </div> :
                        null
                }
            </div>);
    }
}

export default SpotifyVisualizationArea;
