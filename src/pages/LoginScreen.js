import React from 'react';
import {
  View, 
  TextInput, 
  StyleSheet, 
  Button, 
  ActivityIndicator,
  Text,
  Alert
} from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { processLogin } from '../actions';

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLoading: false,
      message: "",
    }
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyCjCvE5URz1tHv0LGMcnIrWIiRSMAuQ-Vw",
      authDomain: "lista-de-despesas.firebaseapp.com",
      databaseURL: "https://lista-de-despesas.firebaseio.com",
      projectId: "lista-de-despesas",
      storageBucket: "lista-de-despesas.appspot.com",
      messagingSenderId: "450485879934",
      appId: "1:450485879934:web:06f41303ff5ac29239042f",
      measurementId: "G-YE2RQK6QZC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  onChangeHandler(field, valor) {
    this.setState({
      [field]: valor
    })
  }

  processLogin() {
    this.setState({ isLoading: true });
    const {email, password} = this.state;

    this.props.processLogin({email, password})
      .then( user => {

        if(user) {
          this.props.navigation.replace('Details');
        } else {

          this.setState({
            isLoading: false,
            message: '',
          })
        }
      })
      .catch( error => {
        this.setState({ 
          isLoading: false,
          message: this.getMessageByError(error.code),
        });
      })


  }

  getMessageByError(code) {
    switch(code) {
      case "auth/user-not-found":
        return "E-mail inexistente.";
      case "auth/wrong-password":
        return "Senha incorreta."
      default:
        return "Erro desconhecido.";
    }
  }

  renderButton() {
    if(this.state.isLoading)
      return <ActivityIndicator />;
    return(
      <Button 
              title='Entrar'
              onPress={() => this.processLogin()}
            />
    );
  }

  renderMessage() {
    const { message } = this.state;

    if(!message) 
      return null;
    
    return(
      <View>
        <Text>{message}</Text>
      </View>  
    );
  }

  render() {
    return(
        <View>
          <FormRow>
            <TextInput 
                style={styles.textInput}
                placeholder="E-mail: user@provider.com"
                value={this.state.email}
                onChangeText={valor => {
                  this.onChangeHandler('email', valor)
                }}
                keyboardType="email-address"
                autoCapitalize="none"
              />           
          </FormRow>

          <FormRow>
            <TextInput 
                  style={styles.textInput}
                  placeholder="Enter your password here"
                  secureTextEntry
                  value={this.state.password}
                  onChangeText={valor => {
                    this.onChangeHandler('password', valor)
                  }}
                />            
          </FormRow>

          { this.renderButton() }
          { this.renderMessage() }

        </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
   borderWidth: 1,
   borderColor: 'gray',
   paddingLeft: 10,
   paddingRight: 10,
  }
});


export default connect(null, {processLogin})(LoginScreen);