import * as actionTypes from '../constants/constants'

export function leftMove(data) {
    return {
        type: actionTypes.ICON_LIFT,
        data
    }
}

export function rightMove(data) {
    return {
        type: actionTypes.ICON_RIGHT,
        data
    }
}
