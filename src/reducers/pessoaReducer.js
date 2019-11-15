import {SET_PESSOAS} from '../actions'

export default function(state = null, action) {
    switch(action.type) {
        case SET_PESSOAS:
            console.log(action.pessoas);
            return action.pessoas;
        default:
            return state;
    }
}