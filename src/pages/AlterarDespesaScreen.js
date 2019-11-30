import React from 'react'
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
  import { connect } from 'react-redux'
  import { setFieldDespesa, saveDespesa, setAllFieldsDespesa, resetFormDespesa} from '../actions';

  class AlterarMesScreen extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        const {navigation, setAllFieldsDespesa, resetFormDespesa} = this.props;
        const {params} = navigation.state

        if(params && params.despesaToEdit) {
            setAllFieldsDespesa(params.despesaToEdit) 
        } else {
            resetFormDespesa();
        }
    }

      render() {
        const { despesaForm, setFieldDespesa, saveDespesa, navigation } = this.props;
        const { mes } = this.props.navigation.state.params
          return (
              <ScrollView>
                <Text>{despesaForm.nome}</Text>
                <View>
                    <TextInput
                        placeholder="Despesa"
                        value = {despesaForm.name}
                        onChangeText={value => setFieldDespesa('name', value)}
                    />
                    <Button
                        title="Editar"
                        onPress={async() => {
                            try{
                                await saveDespesa(despesaForm, mes)
                                this.props.navigation.goBack()
                            } catch (error) {
                                Alert.alert('Erro', error.message)
                            }
                            
                        }}
                    />
                </View>
              </ScrollView>
          )
      }
  }

  const mapStateToProps = (state) => {
      return({
          despesaForm: state.despesaForm
      })
  }

  const mapDispatchToProps = {
      setFieldDespesa,
      saveDespesa,
      setAllFieldsDespesa,
      resetFormDespesa
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AlterarMesScreen)