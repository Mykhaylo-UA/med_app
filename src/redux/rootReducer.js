import { REGISTRATION_FAILED, REGISTRATION_SUCCESS, MODAL, AUTHORIZATION_VISIT, LOGOUT, OPEN_ALERT, CLOSE_ALERT, 
    AUTHORIZATION_FAILED, AUTHORIZATION_SUCCESS,
    PROFILE_LOAD_FAILED, PROFILE_LOAD_SUCCESS, 
    EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILED,
    ADD_DISEASE_FAILED, ADD_DISEASE_SUCCESS} from "./actions"

import initialState from "./initialState" 

function rootReducer(state = initialState, action){
    switch(action.type){
        case MODAL:{
            return {...state, modalOpen: action.payload}
        }
        case AUTHORIZATION_VISIT:{
            if(window.localStorage.getItem("token"))
            {
                return {...state, isAuthenticate: true}
            }
            return {...state, isAuthenticate: false} 
        }
        case REGISTRATION_SUCCESS:{
            if(window.localStorage.getItem("token"))
            {
                window.localStorage.removeItem("token")
            }
            window.localStorage.setItem("token", action.payload)
            return {...state, isAuthenticate: true, modalOpen: false, 
                alert: {...alert, text: "Ви успішно зареєстровані та авторизовані", status: "success", timeout: 2000, state: true}}
        }
        case REGISTRATION_FAILED:{
            return {...state, isAuthenticate: false,
                alert: {...alert, text: action.payload.data, status: "error", timeout: 2000, state: true}}
        }
        case AUTHORIZATION_SUCCESS:{
            if(window.localStorage.getItem("token"))
            {
                window.localStorage.removeItem("token")
            }
            window.localStorage.setItem("token", action.payload)
            return {...state, isAuthenticate: true, modalOpen: false, 
                alert: {...alert, text: "Ви успішно авторизовані", status: "success", timeout: 2000, state: true}}
        }
        case AUTHORIZATION_FAILED:{
            return {...state, isAuthenticate: false,
                alert: {...alert, text: action.payload.data, status: "error", timeout: 2000, state: true}}
        }
        case LOGOUT:{
            window.localStorage.removeItem("token", action.payload)
            return {...state, isAuthenticate: false}
        }

        case OPEN_ALERT:{
            return {...state, 
                alert: {...alert, 
                    state: true,
                    text: action.payload.text, 
                    timeout: action.timeout, 
                    status: action.payload.status ? action.payload.status : "default"
                }
            }
        }
        case CLOSE_ALERT:{
            return {...state, alert: {...alert, state: false}}
        }
        case PROFILE_LOAD_SUCCESS:{
            console.log(action.payload)
            return {...state, profile: action.payload, profileState: true, 
                alert: {...alert, text: "Дані успішно загружені", status: "success", timeout: 2000, state: true}}
        }
        case PROFILE_LOAD_FAILED:{
            return {...state, profileState: false,
                alert: {...alert, text: action.payload.data, status: "error", timeout: 2000, state: true}}
        }
        case EDIT_PROFILE_SUCCESS:{
            console.log("EDIT_PROFILE_SUCCESS")
            return {...state, profile: {...action.payload, diseases: state.profile.diseases},
                alert: {...alert, text: "Дані успішно змінені", status: "success", timeout: 2000, state: true}}
        }
        case EDIT_PROFILE_FAILED:{
            return {...state, alert: {...alert, text: action.payload.data, status: "error", timeout: 2000, state: true}}
        }
        case ADD_DISEASE_SUCCESS:{
            return {...state, profile: {...state.profile, diseases: state.profile.diseases.concat(action.payload)},
                alert: {...alert, text: "Дані успішно змінені", status: "success", timeout: 2000, state: true}}
        }
        case ADD_DISEASE_FAILED:{
            return {...state, alert: {...alert, text: action.payload.data, status: "error", timeout: 2000, state: true}}
        }
        default:
            return state;
    }
}

export default rootReducer