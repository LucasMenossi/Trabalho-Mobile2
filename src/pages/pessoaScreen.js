import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import FormRow from '../components/FormRow';
import { connect } from 'react-redux';
import { watchPessoas } from '../actions'

class pessoaScreen extends React.Component{

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.watchPessoas();
    }

    render() {
        return (
            <View>
                <Text style={styles.label}>Lista de moradores da República</Text>
                <FlatList
                    data={this.props.pessoas}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("PessoaDetail", {pessoa: item})}>
                                <Text style={styles.bodyC}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item.id}
                />
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => this.props.navigation.navigate("Meses")}
                ><Text style={styles.textStyle}>Meses</Text></TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => this.props.navigation.navigate("NewPessoaScreen")}
                ><Text style={styles.textStyle}>Inserir Pessoa</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
     borderWidth: 1,
     borderColor: 'gray',
     paddingLeft: 10,
     paddingRight: 10,
     marginBottom: 3
    },
    label: {
     color: 'black',
     fontSize: 15,
     fontWeight: 'bold',
     paddingBottom: 15,
     alignSelf: 'center'
    },
    bodyC: {
     backgroundColor: 'red'
    },
    textStyle: {
     fontSize: 20,
	 color: '#ffffff',
	 textAlign: 'center'
    },
    buttonStyle: {
     padding: 10,
     backgroundColor: '#202646',
     borderRadius: 5
    }
});

const mapStateToProps = state => {
    const {listaPessoas} = state;
  
    if(listaPessoas === null) {
      return {pessoa: listaPessoas};
    }
  
    const keys = Object.keys(listaPessoas);
    const listaPessoasWithId = keys.map(key => {
     return { ...listaPessoas[key], id: key }
    })
    return {pessoas : listaPessoasWithId};
  }
  
  
  export default connect(
    mapStateToProps, 
    {watchPessoas}
  )(pessoaScreen);