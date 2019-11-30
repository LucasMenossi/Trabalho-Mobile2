import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, ScrollView, Alert, Picker} from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import FormRow from '../components/FormRow';
import { connect } from 'react-redux';
import { watchMeses, deleteMes, setFieldMes, saveMes, setAllFieldsMes, resetFormMes } from '../actions'

class mesesScreen extends React.Component{


    constructor(props){
        super(props);
    }

    // retornaListaMeses () {
    //     return this.state.meses.map((month) => {
    //         return (
    //             <View style={styles.container}>
                    
    //             </View>
    //         )
    //     })
    // }

    componentDidMount() {
        this.props.watchMeses();
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
            <ScrollView>
                <Text style={styles.label}>Selecione o mês para adicionar as despesas do mês</Text>
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
                    title="Adicionar mês"
                    onPress={async () => {
                        try{
                            await saveMes(mesForm)
                        } catch(e) {
                            Alert.alert('Erro', erro.message)
                        }
                    }}
                />
                <FlatList
                    data={this.props.meses}
                    renderItem={({item}) => {
                        return (
                            <View style={{flexDirection: "row"}}>
                                <Button 
                                    title={item.name}
                                    color='#eead2d'
                                    onPress = {() => {
                                        setAllFieldsMes(this.props.mesForm)
                                        this.props.navigation.navigate("Despesas", {mes: item})}
                                    }
                                    style={styles.buttonDespesa}
                                />
                                <Button
                                    title={'Excluir'}
                                    color="red"
                                    style={styles.buttonExcluir}
                                    onPress={ async ()=> {
                                        const hasDeleted = await this.props.deleteMes(item)
                                        if(hasDeleted) {
                                            Alert.alert('Mês excluido', `O mês de ${item.name} foi excluido com sucesso!`)
                                        }
                                    }}
                                />
                            </View>
                        )
                    }}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    label: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 15,
        alignSelf: 'center',
        marginTop: 5
    },
    container: {
        flexGrow: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        textAlign: 'center',
        margin: 10,
        minWidth: 150
    },
    area: {
        margin: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    buttonDespesa: {
        flex: 3
    },
    buttonExcluir: {
        flex: 1
    }
});

const mapStateToProps = state => {
    const {listaMeses} = state;
  
    if(listaMeses === null) {
      return {mes: listaMeses, mesForm: state.mesForm};
    }
  
    const keys = Object.keys(listaMeses);
    const listaMesesWithId = keys.map(key => {
     return {...listaMeses[key], id: key }
    })
    return {meses : listaMesesWithId, mesForm: state.mesForm};
  }
  
  const mapDispatchToProps = {
      watchMeses, 
      deleteMes,
      setFieldMes,
      setAllFieldsMes,
      saveMes,
      resetFormMes
  }
  export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(mesesScreen);
