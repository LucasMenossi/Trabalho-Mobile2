import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FormRow from '../components/FormRow'
import { TextInput } from 'react-native-gesture-handler';

export default class contaScreen extends React.Component{

    render() {
        return (
            <View>
                <FormRow>
                    <Text style={styles.label}>Água</Text>
                    <TextInput 
                        placeholder="Valor da conta de água"
                        style={styles.textInput}
                        keyboardType={'numeric'}
                    />           
                </FormRow>
                <FormRow>
                    <Text style={styles.label}>Luz</Text>
                    <TextInput 
                        placeholder="Valor da conta de luz"
                        style={styles.textInput}
                        keyboardType={'numeric'}
                    />           
                </FormRow>
                <FormRow>
                    <Text style={styles.label}>Telefone</Text>
                    <TextInput 
                        placeholder="Valor da conta de telefone"
                        style={styles.textInput}
                        keyboardType={'numeric'}
                    />           
                </FormRow>
                <FormRow>
                    <Text style={styles.label}>Limpeza</Text>
                    <TextInput 
                        placeholder="Valor da limpeza do mês"
                        style={styles.textInput}
                        keyboardType={'numeric'}
                    />           
                </FormRow>
                <FormRow>
                    <Text style={styles.label}>Outros</Text>
                    <TextInput 
                        placeholder="Valor de outras contas"
                        style={styles.textInput}
                        keyboardType={'numeric'}
                    />           
                </FormRow>
                <Text style={styles.textTotal}>Total do mês: R$ 250,00</Text>
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