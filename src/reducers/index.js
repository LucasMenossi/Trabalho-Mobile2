import { combineReducers } from 'redux';
import userReducer from './userReducer';
import newPessoaForm from './newPessoaForm';
import pessoaReducer from './pessoaReducer';
import mesesReducer from './mesesReducer';
import newMesForm from './newMesForm'

export default combineReducers({
  user: userReducer,
  pessoaForm: newPessoaForm,
  listaPessoas: pessoaReducer,
  mesForm: newMesForm,
  listaMeses: mesesReducer,
});