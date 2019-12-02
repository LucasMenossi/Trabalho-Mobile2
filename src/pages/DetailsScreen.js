import React from "react"
import { ScrollView, Text, Button } from "react-native"
import LongText from "../components/LongText"

const text = {}
export default class DetailsScreen extends React.Component {
    
    render() {
        return (
            <ScrollView>
                <LongText label="Introdução do Aplicativo" content="O aplicativo é tem o intuito de facilitar a organização das despesas de um república, assim existem as telas de Pessoas, Mêses e Despesas."/>
                <LongText label="Introdução às Telas" content="Na tela de Pessoas é possível adicionar os moradores da república, na tela de Meses é possível selecionar o mês que deseja adicionar e na tela de Despesas é possível adicionar qual a despesa e qual o valor da despesa que se deseja adicionar. "/>
                <LongText label="Tela de Pessoas" content ="Na tela de Pessoas é possível adicionar, editar e remover pessoas na lista, para adicionar é necessário digitar o nome da pessoa e clicar no botão “Adicionar Morador”, para aditar uma pessoa é necessário clicar sobre o nome da pessoa, assim você será levado até a tela da pessoa, onde é possível clicar no botão “Editar”, a ação de excluir uma pessoa segue o mesmo funcionamento que a de editar, a única diferença é que é necessário clicar no botão “Excluir”."/>
                <LongText label="Tela de Meses" content="Para adicionar um mês é necessário clicar no botão “Meses” na tela de “Pessoas”, assim você será levado até a tela de “Meses”, nela é possível selecionar um mês e ao clicar no botão “Adicionar mês” ele é adicionado, para remover um mês é necessário clicar no botão “Excluir” na frente do mês que se deseja excluir, não sendo possível editar um mês."/>
                <LongText label="Tela de Despesas" content="Para adicionar uma despesa é necessário clicar no mês que corresponde ao mês que se deseja adicionar na tela de “Meses”, nela é possível adicionar uma despesa ao escrever o nome da despesa e clicar no botão “Adicionar despesa”, é possível remover uma despesa ao se clicar no botão “Excluir” em baixo da despesa desejada, para editar o nome de uma despesa é necessário clicar no nome da despesa, editar o nome e clicar no botão “Editar”."/>
                <Button
                    title={"Explorar App"}
                    onPress = {() => {
                        this.props.navigation.navigate("Pessoas")
                    }}
                />
                <Text>Criado por Lucas Lombardi Poças Menossi - 2019</Text>
            </ScrollView>
        )
    }
}