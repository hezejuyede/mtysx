import * as actionTypes from '../constants/constants'


const initialState = {
};
export default function userinfo(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ICON_LIFT:
            return Object.assign({}, state,action.data);
        case actionTypes.ICON_RIGHT:
            return Object.assign({}, state,action.data);
        default:
            return state

    }
}
