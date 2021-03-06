import { SET_FIELD, PESSOA_SAVED_SUCESS, SET_ALL_FIELDS, RESET_FORM} from '../actions';
import pessoaReducer from './pessoaReducer';

const INITIAL_STATE = {
    id: null,
    name: ''
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_FIELD:
            const clonedState = {...state}
            clonedState[action.field] = action.value;
            return clonedState
        case PESSOA_SAVED_SUCESS:
            return INITIAL_STATE;
        case SET_ALL_FIELDS:
            return action.pessoa;
        case RESET_FORM:
            return INITIAL_STATE;
        default: 
            return state;
    }
}