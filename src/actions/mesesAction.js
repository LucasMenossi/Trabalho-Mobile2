import firebase from 'firebase'
import { Alert } from 'react-native'
import { resolve } from 'dns'

export const SET_MESES = 'SET_MESES'
const setMeses = meses => ({
    type: SET_MESES,
    meses: meses
})

export const watchMeses = () => {
    const {currentUser} = firebase.auth()

    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/meses`)
            .on('value', snapshot => {
                const meses = snapshot.val()
                const action = setMeses(meses)
                dispatch(action)
            })
    }
}

export const deleteMes = mes => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            Alert.alert(
                'Exclusão',
                `Você deseja excluir o mês de ${mes.mes}?`,
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
                                .ref(`/users/${currentUser.uid}/meses/${mes.id}`)
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