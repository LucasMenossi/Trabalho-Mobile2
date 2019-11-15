import firebase from 'firebase'
import {Alert} from 'react-native'

export const SET_PESSOAS = 'SET_PESSOAS';
const setPessoas = pessoas => ({
    type: SET_PESSOAS,
    pessoas: pessoas
})

export const watchPessoas = () => {
    const {currentUser} = firebase.auth();

    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/pessoas`)
            .on('value', snapshot => {
                const pessoas = snapshot.val();
                const action = setPessoas(pessoas);
                dispatch(action);
            })
    }
}

export const deletePessoa = pessoa => {
    
    return dispatch => {
        return new Promise((resolve, reject) => {
            Alert.alert(
                'Exclusão',
                `Você deseja excluir ${pessoa.nome}?`,
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
                                .ref(`/users/${currentUser.uid}/pessoas/${pessoa.id}`)
                                .remove()
                            resolve(true)
                        } catch(e) {
                            reject(e)
                        }
                    }
                }
            ],
            { cancelable: false}
            )
        })
    }
}