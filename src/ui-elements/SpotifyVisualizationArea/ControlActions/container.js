import { connect } from 'react-redux'
import ControlActions from './ControlActions'
import { changeVisualizationType, onFeatureChange, onSelectChangeX, onSelectChangeY } from '../../../state/TrackInfo/actions'

const mapStateToProps = (state) => {
    return {
        visualizationType: state.TrackInfo.visualizationType,
        feature: state.TrackInfo.feature,
        xAxis: state.TrackInfo.xAxis,
        yAxis: state.TrackInfo.yAxis
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

