import firebase from 'firebase'
import { Alert } from 'react-native'

export const SET_DESPESA = 'SET_DESPESA'
const setDespesa = despesa => ({
    type: SET_DESPESA,
    despesa: despesa
})

export const watchDespesas = (mes) => {
    const {currentUser} = firebase.auth()

    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/meses/${mes.id}/despesas`)
            .on('value', snapshot => {
                const despesa = snapshot.val()
                const action = setDespesa(despesa)
                dispatch(action)
            })
    }
}

export const deleteDespesa = (despesa, mes) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            Alert.alert(
                'Exclusão',
                `Você deseja excluir a despesa ${despesa.name}?`,
                [{
                    text: 'Não',
                    onPress: () => {
                        resolve(false)
                    },
                    style: 'cancel'
                }, {
                    text: 'Sim',
                    onPress: async() => {
                        const { currentUser } = firebase.auth()
                        try {
                            await firebase
                                .database()
                                .ref(`/users/${currentUser.uid}/meses/${mes.id}/despesas/${despesa.id}`)
                                .remove()
                            resolve(true)
                        } catch(e) {
                            reject(e)
                        }
                    }
                }
            ],
            {cancelable: false}
            )
        })
    }
}