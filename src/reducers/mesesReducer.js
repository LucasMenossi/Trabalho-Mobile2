import { SET_MESES } from '../actions'

export default function(state = null, action) {
    switch(action.type) {
        case SET_MESES:
            console.log(action.meses)
            return action.meses
        default:
            return state
    }
}