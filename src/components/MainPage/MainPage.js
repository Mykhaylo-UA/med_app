import React from "react"
import classes from "./MainPage.module.css"
import footerSVG from "../../svg/footer.svg"
import generalIMG from "../../images/general.png"
import Modal from "../Modal/Modal"

import {setModal} from "../../redux/actionCreators"

import {useHistory} from "react-router-dom"

import {connect} from "react-redux"

const MainPage = props =>{
    let history = useHistory();
    
    return (
        <main className={classes.MainPage}>
            <header>
                <span>Together fun</span>
                <div onClick={props.isAuthenticate ? () => history.push("/me") : () => props.setModal(true)}>Personal cabinet</div>
            </header>
            <main>
                <div>
                    <h1>Mykhailov Mykhailo <br/> Yosypovich</h1>
                    <h3>general doctor</h3>
                    <div className={classes.Button} onClick={props.isAuthenticate ? () => history.push("/signup") : () => props.setModal(true)}>Make an appointment</div>
                </div>
                <div>
                    <img src={generalIMG} alt={""} />
                </div>
            </main>
            <img src={footerSVG} alt={""}/>
            {props.modalOpen ? <Modal close={()=> props.setModal(false)} /> : null}
        </main>
    )
}

function mapStateToProps(state){
    return {
        isAuthenticate: state.isAuthenticate,
        modalOpen : state.modalOpen
    }
}
function mapDispatchToProps(dispatch)
{
    return {
        setModal: payload => dispatch(setModal(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)