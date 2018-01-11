export const ON_SELECT_CHANGE_X = 'ON_SELECT_CHANGE_X';
export const ON_SELECT_CHANGE_Y = 'ON_SELECT_CHANGE_Y';

export function onSelectChangeX(selected) {
    return {
        type: ON_SELECT_CHANGE_X,
        selected
    }
}

export function onSelectChangeY(selected) {
    return {
        type: ON_SELECT_CHANGE_Y,
        selected
    }
}
