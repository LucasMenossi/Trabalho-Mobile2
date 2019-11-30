import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import FormRow from '../components/FormRow';
import { connect } from 'react-redux';
import { watchPessoas, setField, savePessoa, setAllFields, resetForm } from '../actions'

class pessoaScreen extends React.Component{

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.watchPessoas();
        const {navigation, setAllFields, resetForm} = this.props;
        const {params} = navigation.state

        if(params && params.pessoaToEdit) {
            setAllFields(params.pessoaToEdit) 
        } else {
            resetForm();
        }
    }

    render() {
        const { pessoaForm, setField, savePessoa, navigation, resetForm } = this.props;
        return (
            <View>
                <Text style={styles.label}>Lista de moradores da República</Text>
                <FormRow>
                    <TextInput
                        placeholder="Nome da pessoa"
                        value={this.props.name}
                        onChangeText={value => setField('name', value)}
                    />
                </FormRow>
                <Button
                    title="Adicionar morador"
                    onPress={async () => {
                        try {
                            await savePessoa(pessoaForm)
                            resetForm()
                        } catch (error) {
                            Alert.alert('Erro', erro.message)
                        }
                    }}
                />
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
     return {...listaPessoas[key], id: key }
    })
    return {pessoas : listaPessoasWithId, pessoaForm: state.pessoaForm};
  }
  
  const mapDispatchToProps = {
    setField,
    savePessoa,
    setAllFields,
    resetForm,
    watchPessoas
  }
  
  export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(pessoaScreen);