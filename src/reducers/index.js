import { combineReducers } from 'redux';
import userReducer from './userReducer';
import newPessoaForm from './newPessoaForm';
import pessoaReducer from './pessoaReducer';

export default combineReducers({
  user: userReducer,
  pessoaForm: newPessoaForm,
  listaPessoas: pessoaReducer,
});