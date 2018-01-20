import { connect } from 'react-redux'
import ControlActions from './ControlActions'
import { changeVisualizationType, onFeatureChange, onSelectChangeX, onSelectChangeY } from '../actions'

const mapStateToProps = (state) => {
    return {
        visualizationType: state.spotifyVisualizationArea.visualizationType,
        feature: state.spotifyVisualizationArea.feature,
        xAxis: state.spotifyVisualizationArea.xAxis,
        yAxis: state.spotifyVisualizationArea.yAxis
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onVisualizationChange: (selected) => {
            dispatch(changeVisualizationType(selected));
        },
        onFeatureChange: (selected) => {
            dispatch(onFeatureChange(selected));
        },
        onChangeX: (selected) => {
            dispatch(onSelectChangeX(selected));
        },
        onChangeY: (selected) => {
            dispatch(onSelectChangeY(selected));
        }
    }
};

const ControlActionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
) (ControlActions);

export default ControlActionsContainer;

