import { combineReducers } from 'redux';
import userReducer from './userReducer';
import newPessoaForm from './newPessoaForm';
import pessoaReducer from './pessoaReducer';
import mesesReducer from './mesesReducer';
import newMesForm from './newMesForm'
import despesasReducer from './despesasReducer'
import newDespesaForm from './newDespesaForm'

export default combineReducers({
  user: userReducer,
  pessoaForm: newPessoaForm,
  listaPessoas: pessoaReducer,
  mesForm: newMesForm,
  listaMeses: mesesReducer,
  despesaForm: newDespesaForm,
  listaDespesas: despesasReducer,
});