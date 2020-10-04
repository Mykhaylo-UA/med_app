import React, {useState} from "react"
import classes from "./Settings.module.css"
import Input from "../Input/Input"
import Table from "../Table/Table"

import {editProfile, addDisease} from "../../redux/actionCreators"
import {connect} from "react-redux"

const Settings = props =>{

    const [surname, setSurname] = useState(props.profile.surname ? props.profile.surname : "")
    const [name, setName] = useState(props.profile.name ? props.profile.name : "")
    const [other, setOther] = useState(props.profile.other ? props.profile.other : "")
    const [birthday, setBirthday] = useState(props.profile.birthday ? props.profile.birthday.split("T")[0] : "")
    const [proffesion, setProffesion] = useState(props.profile.proffesion ? props.profile.proffesion : "")
    const [address, setAddress] = useState(props.profile.address ? props.profile.address : "")

    const submit = () => {

        props.editProfile({
            surname: surname ? surname : null,
            name: name ? name : null,
            other: other ? other : null,
            birthday: birthday ? birthday : null,
            proffesion: proffesion ? proffesion : null,
            address: address ? address : null
        })
    }

    const [nameDisease, setNameDisease] = useState("")
    const [start, setStart] = useState("")
    const [finish, setFinish] = useState("")
    const [otherDisease, setOtherDisease] = useState("")
    const submitDisease = () => {

        props.addDisease({
            name: nameDisease,
            startDate: start === "" ? null : start,
            finishDate: finish === "" ? null : finish,
            other: otherDisease
        })
    }

    let array = [];
    props.profile.diseases.map(element=>{
        return array.push(
            [
                element.name, 
                element.startDate === null || element.startDate.split("T")[0] === "0001-01-01" ? "-" : element.startDate.split("T")[0],
                element.finishDate === null || element.finishDate.split("T")[0] === "0001-01-01" ? "-" : element.finishDate.split("T")[0], 
                element.other === null ? "-" : element.other])
    })

    return(
        <main className={classes.Settings}>
            <div>
                <h1>General</h1>
                <form>
                    <Input value={surname} onChange={e => setSurname(e.target.value)} id={1} text={"Surname"} type={"text"} placeholder={""} style={{flexBasis: "100%"}}/>
                    <Input value={name} onChange={e => setName(e.target.value)}  id={2} text={"Name"} type={"text"} placeholder={""} style={{flexBasis: "calc(50% - 10px)"}} />
                    <Input value={other} onChange={e => setOther(e.target.value)}  id={3} text={"Other"} type={"text"} placeholder={""} style={{flexBasis: "calc(50% - 10px)"}} />
                    <Input value={birthday} onChange={e => setBirthday(e.target.value)}  id={4} text={"Birthday"} type={"date"} placeholder={""} style={{flexBasis: "calc(50% - 10px)"}} />
                    <Input value={proffesion} onChange={e => setProffesion(e.target.value)}  id={5} text={"Proffesion"} type={"text"} placeholder={""} style={{flexBasis: "calc(50% - 10px)"}} />
                    <Input value={address} onChange={e => setAddress(e.target.value)}  id={7} text={"Address"} type={"text"} placeholder={""} style={{flexBasis: "100%"}} />
                </form>
                <div onClick={submit} className={classes.Button}>Save</div>
            </div>
            <div>
                <h1 style={{backgroundColor:"#4BBEC5"}}>Diseases</h1>
                <form>
                    <Input value={nameDisease} onChange={e => setNameDisease(e.target.value)} id={8} text={"Name"} type={"text"} placeholder={""} style={{flexBasis: "calc(40% - 10px)"}} />
                    <Input value={start} onChange={e => setStart(e.target.value)} id={9} text={"Start"} type={"date"} placeholder={""} style={{flexBasis: "calc(30% - 10px)"}} />
                    <Input value={finish} onChange={e => setFinish(e.target.value)} id={10} text={"Finish"} type={"date"} placeholder={""} style={{flexBasis: "calc(30% - 10px)"}} />
                    <Input value={otherDisease} onChange={e => setOtherDisease(e.target.value)} id={11} text={"Other"} type={"text"} placeholder={""} style={{flexBasis: "100%"}} />
                </form>
                <div className={classes.Table}>
                    <Table 
                            headers={["Disease", "Start", "Finish", "Other" ]}
                            elements={array}    
                        />
                </div>
                <div onClick={submitDisease} className={classes.Button}>Add</div>
            </div>
        </main>
    )
}

function mapStateToProps(state){
    return{
        profile: state.profile
    }
}

function mapDispatchToProps(dispatch){
    return {
        editProfile: payload => dispatch(editProfile(payload)),
        addDisease: payload => dispatch(addDisease(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)