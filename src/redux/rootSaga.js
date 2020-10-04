import {all} from "redux-saga/effects"
import registrationSaga from "./sagas/registrationSaga"
import authorizationSaga from "./sagas/authorizationSaga"
import profileSaga from "./sagas/profileSaga"

export default function* rootSaga() {
    yield all([
        registrationSaga(),
        authorizationSaga(),
        profileSaga()
    ])
} 