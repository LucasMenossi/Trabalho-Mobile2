import React from 'react';
import { Text, View, StyleSheet, ScrollView, Button, FlatList, Alert, TouchableOpacity } from 'react-native';
import FormRow from '../components/FormRow'
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { watchDespesas, deleteDespesa, setFieldDespesa, saveDespesa, setAllFieldsDespesa, resetFormDespesa } from '../actions'

class contaScreen extends React.Component{

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.watchDespesas(this.props.navigation.state.params.mes);
        const {navigation, setAllFieldsDespesa, resetFormDespesa} = this.props;
        const {params} = navigation.state

        if(params && params.despesaToEdit) {
            setAllFieldsDespesa(params.despesaToEdit) 
        } else {
            resetFormDespesa();
        }
    }

    render() {
        const { despesaForm, setFieldDespesa, saveDespesa, navigation, resetFormDespesa } = this.props;
        const { mes } = this.props.navigation.state.params

        return (
            <ScrollView>
                <Text style={styles.label}>Lista de despesas do Mês</Text>
                <FormRow>
                    <TextInput
                        placeholder="Tipo da despesa"
                        value={this.props.despesaForm.name}
                        onChangeText={value => setFieldDespesa('name', value)}
                    />
                </FormRow>
                <Button
                    title="Adicionar Despesa"
                    onPress={async () => {
                        try {
                            await saveDespesa(this.props.despesaForm, mes)
                            resetFormDespesa()
                        } catch (error) {
                            Alert.alert('Erro', error.message)
                        }
                    }}
                />
                <FlatList
                    data={this.props.despesa}
                    renderItem={({item}) => {
                        return (
                            <FormRow>
                                <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate("AlterarDespesa", {despesaToEdit : item, mes : mes})}
                                    style={{backgroundColor:"red"}}>
                                    <Text style={styles.label}>{item.name}</Text>
                                </TouchableOpacity>
                                <TextInput 
                                    placeholder="Valor da conta de "
                                    style={styles.textInput}
                                    keyboardType={'numeric'}
                                />
                                <Button 
                                    title="Excluir"
                                    color="red"
                                    onPress={ async ()=> {
                                        const hasDeleted = await this.props.deleteDespesa(item, mes)
                                        if(hasDeleted) {
                                            Alert.alert('Despesa excluida', `A despesa ${item.name} foi excluida com sucesso!`)
                                        }
                                    }}
                                />           
                            </FormRow>
                        )
                    }}
                    keyExtractor={item => item.id}
                />
                <Text style={styles.textTotal}>Total do mês: R$ 250,00</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
     borderWidth: 1,
     borderColor: 'gray',
     paddingLeft: 10,
     paddingRight: 10,
    },
    label: {
     color: 'black',
     fontSize: 15,
     fontWeight: 'bold',
     paddingBottom: 1
    },
    textTotal: {
        alignSelf: "flex-end",
        marginRight: 20,
        fontSize: 20
    }
  });

  const mapStateToProps = state => {
    const {listaDespesas} = state;
  
    if(listaDespesas === null) {
      return {despesa: listaDespesas, despesaForm: state.despesaForm};
    }
  
    const keys = Object.keys(listaDespesas);
    const listaDespesasWithId = keys.map(key => {
     return {...listaDespesas[key], id: key }
    })
    return {despesa : listaDespesasWithId, despesaForm: state.despesaForm};
  }
  
  const mapDispatchToProps = {
    setFieldDespesa,
    saveDespesa,
    setAllFieldsDespesa,
    resetFormDespesa,
    watchDespesas,
    deleteDespesa
  }
  
  export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(contaScreen);