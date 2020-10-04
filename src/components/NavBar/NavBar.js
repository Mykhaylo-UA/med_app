import React from "react"
import classes from "./NavBar.module.css"
import userSVG from "../../svg/user.svg"
import homeSVG from "../../svg/home.svg"
import settingsSVG from "../../svg/settings.svg"
import messageSVG from "../../svg/message.svg"
import uiSVG from "../../svg/ui.svg"
import logoutSVG from "../../svg/logout.svg"

import {useHistory, useLocation} from "react-router-dom"


import {connect} from "react-redux"
import {logout} from "../../redux/actionCreators"

const NavBar = props =>{
    
    let history = useHistory();
    let location = useLocation();

    return (
        <nav className={classes.NavBar}>
            <div className={classes.Elipse}><img src={userSVG} alt={""}/></div>
            <div className={classes.Menu}>
                <ul>
                    <li className={location.pathname === "/me" ? classes.active : null} onClick={() => history.push("/me")}>
                        <img src={homeSVG} alt={""} />
                    </li>
                    <li className={location.pathname === "/chat" ? classes.active : null} onClick={() => history.push("/chat")}>
                        <img src={messageSVG} alt={""}/>
                    </li>
                    <li className={location.pathname === "/settings" ? classes.active : null} onClick={() => history.push("/settings")}>
                        <img src={settingsSVG} alt={""}/>
                    </li>
                    <li className={location.pathname === "/signup" ? classes.active : null} onClick={() => history.push("/signup")}>
                        <img src={uiSVG} alt={""}/>
                    </li>
                </ul>
            </div>
            <div onClick={props.logout} className={classes.Logout}><img src={logoutSVG} alt={""}/></div>
        </nav>
    )
}

function mapDispatchToProps(dispatch){
    return{
        logout: () => dispatch(logout())
    }
}


export default connect(null, mapDispatchToProps)(NavBar)