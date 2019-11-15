import React from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class mesesScreen extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            meses: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        }
    }

    retornaListaMeses () {
        return this.state.meses.map((month) => {
            return (
                <View style={styles.container}>
                    <Button 
                        title={month}
                        onPress={() => this.actionHandler()}
                        color='#eead2d'
                    />
                </View>
            )
        })
    }

    actionHandler(){
        this.props.navigation.navigate("Despesas")
    }

    render() {
        return (
            <View style={styles.area}>
                <Text style={styles.label}>Selecione o mês para adicionar as despesas do mês</Text>
                {this.retornaListaMeses()}
            </View>
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
    }
});
