import React from 'react';
import { 
  ScrollView,
  Image, 
  StyleSheet,
  Button,
  View,
  Text
} from 'react-native';

import Line from '../components/Line'

import {connect} from 'react-redux'
import {deletePessoa} from '../actions'

class PessoaDetailScreen extends React.Component {
    render() {
        const {pessoa} = this.props.navigation.state.params
        return (
            <ScrollView>
                {/* <Line label="nome" content={pessoa.nome}/> */}
                <Text>{pessoa.name}</Text>
                <View>
                    <Button
                        title="Editar"
                        onPress={() => {
                            this.props.navigation.replace('NewPessoaScreen', {pessoaToEdit: pessoa})
                        }}
                    />
                </View>

                <View>
                    <Button 
                        title = "Excluir"
                        onPress={async () => {
                            const hasDeleted = await this.props.deletePessoa(pessoa)
                            if(hasDeleted) {
                                this.props.navigation.goBack()
                            }
                        }}
                    />
                </View>
            </ScrollView>
        )
    }
}

export default connect(null, {deletePessoa})(PessoaDetailScreen)