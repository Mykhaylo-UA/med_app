import { call, put, takeEvery } from 'redux-saga/effects'
import axios from "axios"

import {PROFILE_LOAD, EDIT_PROFILE, ADD_DISEASE} from "../actions"
import {profileLoadSuccess, profileLoadFailed, openAlert, editProfileSuccess, editProfileFailed, addDiseaseSuccess, addDiseaseFailed} from "../actionCreators"

const fetchToApi = async () => {
    return await axios.get("http://localhost:80/user", {headers: { "Authorization" : "Bearer " + window.localStorage.getItem("token")}})
}
const fetchToApiDisease = async () =>{
    return await axios.get("http://localhost:80/disease", {headers: { "Authorization" : "Bearer " + window.localStorage.getItem("token")}})
}
const fetchEditToApi = async payload => {
    return await axios.put("http://localhost:80/user", payload ,{headers: { "Authorization" : "Bearer " + window.localStorage.getItem("token")}})
}
const fetchAddDiseaseToApi = async payload => {
    return await axios.post("http://localhost:80/disease", payload ,{headers: { "Authorization" : "Bearer " + window.localStorage.getItem("token")}})
}

function* fetchProfile(action) {
    try {
       yield put(openAlert({text: "Загрузка профілю...", timeout: 0}))
       const response = yield call(fetchToApi);
       const responseDisease = yield call(fetchToApiDisease);
       response.data.diseases = responseDisease.data;
       yield put(profileLoadSuccess(response.data));
    } catch (e) {
       yield put(profileLoadFailed(e.response));
    }
 }

function* fetchEditProfile(action){
    try {
        yield put(openAlert({text: "Редагування профілю...", timeout: 0}))
        const response = yield call(fetchEditToApi, action.payload);
        yield put(editProfileSuccess(response.data));
     } catch (e) {
        yield put(editProfileFailed(e.response));
     }
}

function* fetchAddDisease(action){
    try {
        yield put(openAlert({text: "Додавання...", timeout: 0}))
        const response = yield call(fetchAddDiseaseToApi, action.payload);
        yield put(addDiseaseSuccess(response.data));
     } catch (e) {
        yield put(addDiseaseFailed(e.response));
     }
}

function* watchProfile() {
    yield takeEvery(PROFILE_LOAD, fetchProfile);
    yield takeEvery(EDIT_PROFILE, fetchEditProfile);
    yield takeEvery(ADD_DISEASE, fetchAddDisease)
}

export default watchProfile