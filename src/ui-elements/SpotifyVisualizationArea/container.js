import { connect } from 'react-redux'
import SpotifyVisualizationArea from './SpotifyVisualizationArea'

const mapStateToProps = (state) => {
    return {
        xAxis: state.controlActions.xAxis,
        yAxis: state.controlActions.yAxis,
        tracks: state.spotifyVisualizationArea.results.tracks
    }
};
//
//const mapDispatchToProps = (dispatch) => {
//    return {
//        onClick: (id) => {
//            dispatch(getSongInfo(id));
//        }
//    }
//};

const SpotifyVisualizationAreaContainer = connect(
    mapStateToProps//,
    //mapDispatchToProps
) (SpotifyVisualizationArea);

export default SpotifyVisualizationAreaContainer;

