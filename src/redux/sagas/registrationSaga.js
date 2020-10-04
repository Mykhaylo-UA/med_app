import { call, put, takeEvery } from 'redux-saga/effects'
import axios from "axios"

import {REGISTRATION} from "../actions"
import {registrationSuccess, registrationFailed, openAlert} from "../actionCreators"

const fetchToApi = async ({telephone, password}) => {
    return await axios.post("http://localhost:80/register", {telephone, password})
}

function* fetchRegistration(action) {
    try {
       yield put(openAlert({text: "Виконуємо реєстрацію...", timeout: 0}))
       const response = yield call(fetchToApi, action.payload);
       yield put(registrationSuccess(response.data.token));
    } catch (e) {
       yield put(registrationFailed(e.response));
    }
 }

function* watchRegistration() {
    yield takeEvery(REGISTRATION, fetchRegistration);
}

export default watchRegistration