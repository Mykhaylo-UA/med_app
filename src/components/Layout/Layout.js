import React from "react"
import NavBar from "../NavBar/NavBar"
import classes from "./Layout.module.css"
import headerLogo from "../../svg/headerLogo.svg"
import telephoneSVG from "../../svg/telephone.svg"

import {useHistory} from "react-router-dom"

import {connect} from "react-redux"

const Layout = props =>{
    const history = useHistory()

    return (
    <section className={classes.Layout}>
        <NavBar />
        <section>
            <header>
                <div>
                    <img src={headerLogo} alt={""} />
                    <h3>Doctor</h3>
                </div>
                <div>
                    <img src={telephoneSVG} alt={""} />
                    <h3>+380 66 37 43 284</h3>
                </div>
            </header>
            {props.children}

        </section>
        <div className={classes.AdminPanel} onClick={()=> history.push("./admin")}>!</div>
    </section>
    )
}

function mapStateToProps(state){
    return{
        isAuthenticate : state.isAuthenticate
    }
}

export default connect(mapStateToProps)(Layout)