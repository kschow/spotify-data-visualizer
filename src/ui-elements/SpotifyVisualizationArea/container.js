import { connect } from 'react-redux'
import SpotifyVisualizationArea from './SpotifyVisualizationArea'

const mapStateToProps = (state) => {
    let stateSlice = state.spotifyVisualizationArea;
    return {
        visualizationType: stateSlice.visualizationType,
        feature: stateSlice.feature,
        xAxis: stateSlice.xAxis,
        yAxis: stateSlice.yAxis,
        data: stateSlice.data
    }
};

//const mapDispatchToProps = (dispatch) => {
//    return {
//    }
//};

const SpotifyVisualizationAreaContainer = connect(
    mapStateToProps//,
    //mapDispatchToProps
) (SpotifyVisualizationArea);

export default SpotifyVisualizationAreaContainer;

