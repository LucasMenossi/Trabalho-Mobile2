import { SET_FIELD_MES, MES_SAVED_SUCESS, SET_ALL_FIELDS_MES, RESET_FORM_MES} from '../actions';
import mesesReducer from './mesesReducer';

const INITIAL_STATE_MES = {
    id: null,
    name: ''
}

export default function(state = INITIAL_STATE_MES, action) {
    switch(action.type) {
        case SET_FIELD_MES:
            const clonedState = {...state}
            clonedState[action.field] = action.value;
            return clonedState
        case MES_SAVED_SUCESS:
            return INITIAL_STATE_MES;
        case SET_ALL_FIELDS_MES:
            return action.mes;
        case RESET_FORM_MES:
            return INITIAL_STATE_MES;
        default: 
            return state;
    }
}