import { SET_DESPESA } from '../actions'

export default function(state = null, action) {
    switch(action.type) {
        case SET_DESPESA:
            console.log(action.despesa)
            return action.despesa
        default:
            return state
    }
}