import firebase from 'firebase'

export const SET_FIELD = 'SET_FIELD'
export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
}

export const PESSOA_SAVED_SUCESS = 'PESSOA_SAVED_SUCESS'
export const pessoaSavedSucess = () => {
    return {
        type: PESSOA_SAVED_SUCESS
    }
}

export const SET_ALL_FIELDS = 'SET_ALL_FIELDS'
export const setAllFields = pessoa => ({
    type: SET_ALL_FIELDS,
    pessoa: pessoa
})

export const RESET_FORM = 'RESET_FORM'
export const resetForm = () => ({
    type: RESET_FORM
})

export const savePessoa = pessoa => {
    const { currentUser } = firebase.auth()

    return async dispatch => {
        if(pessoa.id) {
            await firebase
            .database()
            .ref(`/users/${currentUser.uid}/pessoas/${pessoa.id}`)
            .set(pessoa)
            
        } else {
            await firebase
                .database()
                .ref(`/users/${currentUser.uid}/pessoas`)
                .push(pessoa)
        }

        dispatch(pessoaSavedSucess());
    }
}