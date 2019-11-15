import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import FormRow from '../components/FormRow';
import { connect } from 'react-redux';
import { watchMeses } from '../actions'

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

    render() {
        return (
            <View style={styles.area}>
                <Text style={styles.label}>Selecione o mês para adicionar as despesas do mês</Text>
                <FlatList
                    data={this.props.meses}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity>
                                <Button 
                                    title={item.mes}
                                    color='#eead2d'
                                />
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item.id}
                />
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

const mapStateToProps = state => {
    const {listaMeses} = state;
  
    if(listaMeses === null) {
      return {mes: listaMeses};
    }
  
    const keys = Object.keys(listaMeses);
    const listaMesesWithId = keys.map(key => {
     return {...listaPessoas[key], id: key }
    })
    return {meses : listaMesesWithId};
  }
  
  
  export default connect(
    mapStateToProps, 
    {watchMeses}
  )(mesesScreen);
