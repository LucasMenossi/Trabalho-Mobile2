import { SET_FIELD_DESPESA, DESPESA_SAVED_SUCESS, SET_ALL_FIELDS_DESPESA, RESET_FORM_DESPESA} from '../actions';
import despesasReducer from './despesasReducer';

const INITIAL_STATE = {
    id: null,
    name: ''
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_FIELD_DESPESA:
            const clonedState = {...state}
            clonedState[action.field] = action.value;
            return clonedState
        case DESPESA_SAVED_SUCESS:
            return INITIAL_STATE;
        case SET_ALL_FIELDS_DESPESA:
            return action.despesa;
        case RESET_FORM_DESPESA:
            return INITIAL_STATE;
        default: 
            return state;
    }
}