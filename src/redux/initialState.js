const initialState = {
    isAuthenticate : false,
    modalOpen : false,
    
    alert: {
        state: false,
        status: "default",
        text: "",
        timeout: 0
    },

    profileState: false,
    profile:{
        name: null,
        surname: null,
        other: null,
        proffesion: null,
        birthday: null,
        telephone: null,
        address: null,
        diseases: []
    }
}

export default initialState