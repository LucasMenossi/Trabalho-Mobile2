import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './pages/LoginScreen';
import pessoaScreen from './pages/pessoaScreen';
import contaScreen from './pages/contaScreen';
import mesesScreen from './pages/mesesScreen';
import NewPessoaScreen from './pages/NewPessoaScreen'
import PessoaDetailScreen from './pages/PessoaDetailScreen'
import NewMesScreen from './pages/NewMesScreen'

const AppNavigator = createStackNavigator({
  'Login': {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login', 
      headerTitleStyle : {
        fontSize: 20,
        flexGrow: 1,
        textAlign: 'center',
        color: 'white'
      },
      headerStyle: {
        backgroundColor: 'black',
      }
    },
  },
  'Pessoas': {
    screen: pessoaScreen,
    navigationOptions: {
      title: 'Pessoas',
      headerTitleStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
      },
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white'
    },
  },
  'NewPessoaScreen': {
    screen: NewPessoaScreen,
    navigationOptions: ({navigation}) => {
      if(navigation.state.params && navigation.state.params.pessoaToEdit) {
        return {
          title: navigation.state.params.pessoaToEdit.name
        }
      }

      return {
        title: 'Inserir pessoa'
      }
    }
  },
  'PessoaDetail':{
    screen: PessoaDetailScreen,
    navigationOptions: ({navigation}) =>{
      const { pessoa } = navigation.state.params
      return {
        title: pessoa.name
      }
    }
  },
  'Despesas': {
    screen: contaScreen,
    navigationOptions: {
      title: 'Despesas',
      headerTitleStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
      },
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white'
    }
  },
  'Meses': {
    screen: mesesScreen,
    navigationOptions: {
      title: 'Meses',
      headerTitleStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
      },
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white'
    }
  },
  'NewMesScreen': {
    screen: NewMesScreen,
    navigationOptions: ({navigation}) => {
      if(navigation.state.params && navigation.state.params.pmesToEdit) {
        return {
          title: navigation.state.params.mesToEdit.name
        }
      }

      return {
        title: 'Adicionar mês'
      }
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

