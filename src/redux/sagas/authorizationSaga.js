import { call, put, takeEvery } from 'redux-saga/effects'
import axios from "axios"

import {AUTHORIZATION} from "../actions"
import {authorizationSuccess, authorizationFailed, openAlert} from "../actionCreators"

const fetchToApi = async ({telephone, password}) => {
    return await axios.post("http://localhost:80/login", {telephone, password})
}

function* fetchAuthorization(action) {
    try {
       yield put(openAlert({text: "Виконуємо авторизацію...", timeout: 0}))
       const response = yield call(fetchToApi, action.payload);
       yield put(authorizationSuccess(response.data.token));
    } catch (e) {
       yield put(authorizationFailed(e.response));
    }
 }

function* watchAuthorization() {
    yield takeEvery(AUTHORIZATION, fetchAuthorization);
}

export default watchAuthorization