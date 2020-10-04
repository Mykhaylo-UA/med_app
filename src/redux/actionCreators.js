import {REGISTRATION, AUTHORIZATION, REGISTRATION_SUCCESS, REGISTRATION_FAILED, MODAL, 
    AUTHORIZATION_VISIT, LOGOUT, CLOSE_ALERT, OPEN_ALERT, AUTHORIZATION_SUCCESS, AUTHORIZATION_FAILED,
    PROFILE_LOAD, PROFILE_LOAD_SUCCESS, PROFILE_LOAD_FAILED, 
    EDIT_PROFILE, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILED, 
    ADD_DISEASE, ADD_DISEASE_SUCCESS, ADD_DISEASE_FAILED} from "./actions"

export const registration = payload => ({type: REGISTRATION, payload: payload})
export const registrationSuccess = (payload) => ({type: REGISTRATION_SUCCESS, payload: payload })
export const registrationFailed = payload => ({type: REGISTRATION_FAILED, payload: payload})

export const setModal = payload => ({type: MODAL, payload: payload})

export const authorization = payload => ({type: AUTHORIZATION, payload: payload})
export const authorizationSuccess = payload => ({type: AUTHORIZATION_SUCCESS, payload: payload})
export const authorizationFailed = payload => ({type: AUTHORIZATION_FAILED, payload: payload})
export const authorizationVisit = () => ({type: AUTHORIZATION_VISIT})

export const logout = () => ({type: LOGOUT})

export const openAlert = payload => ({type: OPEN_ALERT, payload: payload})
export const closeAlert = () => ({type: CLOSE_ALERT})

export const profileLoad = () => ({type: PROFILE_LOAD})
export const profileLoadSuccess = payload => ({type: PROFILE_LOAD_SUCCESS, payload: payload})
export const profileLoadFailed = payload => ({type: PROFILE_LOAD_FAILED, payload: payload})

export const editProfile = payload => ({type: EDIT_PROFILE, payload: payload})
export const editProfileSuccess = payload => ({type: EDIT_PROFILE_SUCCESS, payload: payload})
export const editProfileFailed = payload => ({type: EDIT_PROFILE_FAILED, payload: payload})

export const addDisease = payload => ({type: ADD_DISEASE, payload: payload})
export const addDiseaseSuccess = payload => ({type: ADD_DISEASE_SUCCESS, payload: payload})
export const addDiseaseFailed = payload => ({type: ADD_DISEASE_FAILED, payload: payload})