import { connect } from 'react-redux'
import ControlActions from './ControlActions'
import { onSelectChangeX, onSelectChangeY } from './actions'

const mapStateToProps = (state) => {
    return {
        xAxis: state.controlActions.xAxis,
        yAxis: state.controlActions.yAxis
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
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

