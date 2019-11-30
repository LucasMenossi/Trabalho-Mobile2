import firebase from 'firebase'

export const SET_FIELD_DESPESA = 'SET_FIELD_DESPESA'
export const setFieldDespesa = (field, value) => {
    return {
        type: SET_FIELD_DESPESA,
        field,
        value
    }
}

export const DESPESA_SAVED_SUCESS = 'DESPESA_SAVED_SUCESS'
export const despesaSavedSucess = () => {
    return {
        type: DESPESA_SAVED_SUCESS
    }
}

export const SET_ALL_FIELDS_DESPESA = 'SET_ALL_FIELDS_DESPESA'
export const setAllFieldsDespesa = despesa => ({
    type: SET_ALL_FIELDS_DESPESA,
    despesa: despesa
})

export const RESET_FORM_DESPESA = 'RESET_FORM_DESPESA'
export const resetFormDespesa = () => ({
    type: RESET_FORM_DESPESA
})

export const saveDespesa = (despesa, mes) => {
    const { currentUser } = firebase.auth()

    return async dispatch => {
        if(despesa.id) {
            await firebase
            .database()
            .ref(`/users/${currentUser.uid}/meses/${mes.id}/despesas/${despesa.id}`)
            .set(despesa)
        } else {
            await firebase
                .database()
                .ref(`/users/${currentUser.uid}/meses/${mes.id}/despesas`)
                .push(despesa)
        }

        dispatch(despesaSavedSucess());
    }
}