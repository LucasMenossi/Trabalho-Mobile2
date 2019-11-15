import firebase from 'firebase'

export const SET_FIELD_MES = 'SET_FIELD_MES'
export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
}

export const MES_SAVED_SUCESS = 'MES_SAVED_SUCESS'
export const mesSavedSucess = () => {
    return {
        type: MES_SAVED_SUCESS
    }
}

export const SET_ALL_FIELDS_MES = 'SET_ALL_FIELDS_MES'
export const setAllFields = mes => ({
    type: SET_ALL_FIELDS,
    mes: mes
})

export const RESET_FORM_MES = 'RESET_FORM_MES'
export const resetForm = () => ({
    type: RESET_FORM
})

export const saveMes = mes => {
    const { currentUser } = firebase.auth()

    return async dispatch => {
        if(mes.id) {
            await firebase
                .database()
                .ref(`/users/${currentUser.uid}/meses/${mes.id}`)
                .set(mes)
        } else {
            await firebase
                .database()
                .ref(`/users/${currentUser.uid}/meses`)
                .push(mes)
        }
        dispatch(mesSavedSucess())
    }
}