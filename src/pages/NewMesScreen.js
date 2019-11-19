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
import { setFieldMes, saveMes, setAllFieldsMes, resetFormMes} from '../actions';

class NewMesScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { navigation, setAllFieldsMes, resetFormMes} = this.props
        const { params } = navigation.state

        if(params && params.mesToEdit) {
            setAllFieldsMes(params.mesToEdit)
        } else {
            resetFormMes()
        }
    }

    render() {
        const { mesForm, setFieldMes, saveMes, navigation } = this.props

        return (
            <View>
                <FormRow>
                    <Picker
                        selectedValue={mesForm.name}
                        onValueChange={itemValue => {
                            setFieldMes('name', itemValue)
                        }
                    }>
                        <Picker.Item label="Janeiro" value="Janeiro"/>
                        <Picker.Item label="Fevereiro" value="Fevereiro"/>
                        <Picker.Item label="Março" value="Março"/>
                        <Picker.Item label="Abril" value="Abril"/>
                        <Picker.Item label="Maio" value="Maio"/>
                        <Picker.Item label="Junho" value="Junho"/>
                        <Picker.Item label="Julho" value="Julho"/>
                        <Picker.Item label="Agosto" value="Agosto"/>
                        <Picker.Item label="Setembro" value="Setembro"/>
                        <Picker.Item label="Outubro" value="Outubro"/>
                        <Picker.Item label="Novembro" value="Novembro"/>
                        <Picker.Item label="Dezembro" value="Dezembro"/>
                    </Picker>
                </FormRow>
                <Button
                    title="Salvar"
                    onPress={async () => {
                        try{
                            await saveMes(mesForm)
                            navigation.goBack()
                        } catch(e) {
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
        mesForm: state.mesForm
    })
}

const mapDispatchToProps = {
    setFieldMes,
    setAllFieldsMes,
    saveMes,
    resetFormMes
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMesScreen)