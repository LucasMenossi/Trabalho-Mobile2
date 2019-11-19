import firebase from 'firebase'

export const SET_FIELD_MES = 'SET_FIELD_MES'
export const setFieldMes = (field, value) => {
    return {
        type: SET_FIELD_MES,
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
export const setAllFieldsMes = mes => ({
    type: SET_ALL_FIELDS_MES,
    mes: mes
})

export const RESET_FORM_MES = 'RESET_FORM_MES'
export const resetFormMes = () => ({
    type: RESET_FORM_MES
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

        dispatch(mesSavedSucess());
    }
}