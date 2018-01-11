import { ON_SELECT_CHANGE_X, ON_SELECT_CHANGE_Y } from './actions'
// import { combineReducers } from 'redux'

const initialState = {
    xAxis: 'energy',
    yAxis: 'loudness'
};

export function controlActions(state = initialState, action) {
    switch(action.type) {
        case ON_SELECT_CHANGE_X:
            return {
                ...state,
                xAxis: action.selected
            };
        case ON_SELECT_CHANGE_Y:
            return {
                ...state,
                yAxis: action.selected
            };
        default:
            return state;
    }
}
//
//function createNamedWrapperReducer(reducerFunction, reducerName) {
//    return (state, action) => {
//        const {name} = action;
//        const isInitializationCall = state === undefined;
//        if(name !== reducerName && !isInitializationCall) return state;
//
//        return reducerFunction(state, action);
//    }
//}
//
//export const controlActions = combineReducers({
//    XAxis: createNamedWrapperReducer(onChange, 'X'),
//    YAxis: createNamedWrapperReducer(onChange, 'Y')
//});