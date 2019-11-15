import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Picker,
  Text,
  ScrollView,
  Button,
  ActivityIndicator,
  Alert
} from 'react-native';

import FormRow from '../components/FormRow'
import {connect } from 'react-redux'
import { setField, savePessoa, setAllFields, resetForm} from '../actions';

class NewPessoaScreen extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const {navigation, setAllFields, resetForm} = this.props;
        const {params} = navigation.state

        if(params && params.pessoaToEdit) {
            setAllFields(params.pessoaToEdit) 
        } else {
            resetForm();
        }
    }

    render() {
        const { pessoaForm, setField, savePessoa, navigation } = this.props;

        return (
            <View>
                <FormRow>
                    <TextInput
                        placeholder="Nome da pessoa"
                        value={pessoaForm.name}
                        onChangeText={value => setField('name', value)}
                    />
                </FormRow>
                <Button
                    title="Salvar"
                    onPress={async () => {
                        try {
                            await savePessoa(pessoaForm)
                            navigation.goBack()
                        } catch (error) {
                            Alert.alert('Erro', erro.message)
                        }
                    }}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        pessoaForm: state.pessoaForm
    })
}

const mapDispatchToProps = {
    setField,
    savePessoa,
    setAllFields,
    resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPessoaScreen)