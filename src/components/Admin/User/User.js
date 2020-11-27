import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import classes from './User.module.css'

const User = () => {
    const {id} = useParams();

    const [user, setUser] = useState(null);
    const [diseases, setDiseases] = useState([]);
    const [treatments, setTreatments] = useState([]);


    const [nameDisease, setNameDisease] = useState("")
    const [start, setStart] = useState("")
    const [finish, setFinish] = useState("")
    const [otherDisease, setOtherDisease] = useState("")
    const submitDisease = async () => {
        const response = await axios.post("http://localhost:80/admindisease?id="+id,
            {
                name: nameDisease,
                startDate: start === "" ? null : start,
                finishDate: finish === "" ? null : finish,
                other: otherDisease
            },
            { headers: { "Authorization" : "Bearer " + window.localStorage.getItem("token")}}
        )

        setDiseases(diseases.concat(response.data))
    }


    const [nameTreatment, setNameTreatment] = useState("")
    const [count, setCount] = useState("")
    const [perDay, setPerDay] = useState("")
    const [otherTreatment, setOtherTreatment] = useState("")
    const submitTreatment = async () => {
        const response = await axios.post("http://localhost:80/admintreatment?id="+id,
            {
                name: nameTreatment,
                count: start === "" ? null : count,
                perDay: finish === "" ? null : perDay,
                other: otherTreatment
            },
            { headers: { "Authorization" : "Bearer " + window.localStorage.getItem("token")}}
        )
            console.log(response.data)
        setTreatments(treatments.concat(response.data))
    }



    useEffect(() =>{
        const response = async () => { 
            const result =      
             await axios.get("http://localhost:80/user/user?id="+id, {headers: { "Authorization" : "Bearer " + window.localStorage.getItem("token")}})
             setUser(result.data)

            const resultDiseases =              
                await axios.get("http://localhost:80/disease/admin/"+id, {headers: { "Authorization" : "Bearer " + window.localStorage.getItem("token")}})
            setDiseases(resultDiseases.data)

            const resultTreatments =              
                await axios.get("http://localhost:80/treatment/admin/"+id, {headers: { "Authorization" : "Bearer " + window.localStorage.getItem("token")}})
            console.log(resultTreatments.data)
            setTreatments(resultTreatments.data)
        }

        response()
    }, [id])

    return (
        <React.Fragment >
            <table className={classes.User}>
                <caption>User</caption>
                <thead>
                    {user ? Object.keys(user).map( key =><td key={key}><th>{key}</th></td>) : null}
                </thead>
                <tbody>
                    {user ? Object.values(user).map( value =><td key={value}><tr>{value}</tr></td>) : null}
                </tbody>
            </table>

            <table className={classes.User}>
                <caption>Diseases</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Start</th>
                        <th>Finish</th>
                        <th>Other</th>
                    </tr>
                </thead>
                <tbody>
                    { diseases ? diseases.map( disease => <tr key={disease.id}>
                        <td>{disease.name}</td>
                        <td>{disease.start}</td>
                        <td>{disease.finish}</td>
                        <td>{disease.other}</td>
                    </tr>) :null}                    
                    
                    <tr>
                        <td><input value={nameDisease} onChange={e => setNameDisease(e.target.value)} id={1}  type={"text"} placeholder={""}  /></td>
                        <td><input value={start} onChange={e => setStart(e.target.value)} id={2} type={"date"} placeholder={""} /></td>
                        <td><input value={finish} onChange={e => setFinish(e.target.value)} id={3}  type={"date"} placeholder={""}  /></td>
                        <td><input value={otherDisease} onChange={e => setOtherDisease(e.target.value)} id={4} type={"text"} placeholder={""} /></td>
                       
                    </tr>
                    <td colspan={diseases ? diseases[0] ? Object.keys(diseases[0]).length : null : null} ><div onClick={submitDisease} className={classes.Button}>Add</div></td>
                </tbody>
            </table>

            <table className={classes.User}>
                <caption>Treatments</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Count</th>
                        <th>Per Day</th>
                        <th>Other</th>
                    </tr>
                </thead>
                <tbody>
                    { treatments ? treatments.map( treatment => <tr key={treatment.id}>
                        <td>{treatment.name}</td>
                        <td>{treatment.count}</td>
                        <td>{treatment.perDay}</td>
                        <td>{treatment.other}</td>
                    </tr>) :null}
                    
                    <tr>
                        <td><input value={nameTreatment} onChange={e => setNameTreatment(e.target.value)} id={1}  type={"text"} placeholder={""}  /></td>
                        <td><input value={count} onChange={e => setCount(e.target.value)} id={2} type={"text"} placeholder={""} /></td>
                        <td><input value={perDay} onChange={e => setPerDay(e.target.value)} id={3}  type={"text"} placeholder={""}  /></td>
                        <td><input value={otherTreatment} onChange={e => setOtherTreatment(e.target.value)} id={4} type={"text"} placeholder={""} /></td>
                       
                    </tr>
                    <td colspan={treatments ? treatments[0] ? Object.keys(treatments[0]).length : null : null} ><div onClick={submitTreatment} className={classes.Button}>Add</div></td>
                
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default User