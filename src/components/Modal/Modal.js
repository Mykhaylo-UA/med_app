import React, {useState} from "react"
import classes from "./Modal.module.css"
import loginPNG from "../../images/login.png"
import registrationPNG from "../../images/registration.png"
import Input from "../Input/Input"

import {registration, authorization} from "../../redux/actionCreators"
import {connect} from "react-redux"

const Modal = props =>{

    const [auth, setAuth] = useState(false)
    
    const [telephone, setTelephone] = useState("")
    const [password, setPassword] = useState("")

    const authorization =( 
        <div className={classes.Modal}>
            <div><img src={loginPNG} alt={""}/></div>
            <div>
                <h3>Log in</h3>
                <Input id={1} text={"Telephone"} type={"tel"} placeholder={""} value={telephone} onChange={e => setTelephone(e.target.value)} />
                <Input id={2} text={"Password"} type={"password"} placeholder={""} value={password} onChange={e => setPassword(e.target.value)}/>
                <div onClick={() => props.authorization({telephone: telephone, password: password})} className={classes.Button}>Log in</div>
                <div style={{marginTop: 5, cursor: "pointer", color: "#4BBEC5"}} onClick={()=> setAuth(true)}>Registration</div>
            </div>
        </div>
    )


    const registration = (
        <div className={classes.Modal}>
             <div>
                <h3>Registration</h3>
                <Input id={1} text={"Telephone"} type={"tel"} placeholder={""} value={telephone} onChange={e => setTelephone(e.target.value)}/>
                <Input id={2} text={"Password"} type={"password"} placeholder={""} value={password} onChange={e => setPassword(e.target.value)}/>
                <div onClick={() => props.registration({telephone: telephone, password: password})} className={classes.Button}>Registration</div>
                <div style={{marginTop: 5, cursor: "pointer", color: "#4BBEC5"}} onClick={()=> setAuth(false)}>Auhorization</div>
            </div>
            <div><img src={registrationPNG} alt={""}/></div>
        </div>
    )

    return (
        <React.Fragment>
            <div className={classes.Background} onClick={props.close} />
            {auth ? registration : authorization}
        </React.Fragment>
    )
}

function mapDispathToProps(dispatch){
    return{
        registration : payload => dispatch(registration(payload)),
        authorization : payload => dispatch(authorization(payload))
    }
}

export default connect(null, mapDispathToProps)(Modal)