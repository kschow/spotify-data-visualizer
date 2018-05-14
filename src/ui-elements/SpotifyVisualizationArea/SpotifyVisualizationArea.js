import React from 'react'
import './SpotifyVisualizationArea.css'
import ControlActionsContainer from './ControlActions/container'
import VizBar from './Charts/VizBar'
import VizScatter from './Charts/VizScatter'
import Loading from '../Common/Loading/Loading'

class SpotifyVisualizationArea extends React.Component {
    render() {
        const {
            isLoading,
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

        let body;
        if (isLoading) {
            body = <Loading />
        } else {
            body = data !== undefined ?
                <div><ControlActionsContainer />{chart}</div> :
                null
        }

        return (<div>{body}</div>);
    }
}

export default SpotifyVisualizationArea;
