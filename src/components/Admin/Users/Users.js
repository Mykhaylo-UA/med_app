import React, {useEffect} from "react"
import axios from "axios"
import _ from 'lodash'
import classes from "./Users.module.css"
import {useHistory} from "react-router-dom"

function exampleReducer(state, action) {
    switch (action.type) {
        case 'LOAD_DATA':{
            return{
                ...state,
                data: action.payload
            }
        }
        case 'CHANGE_SORT':
            if (state.column === action.column) {
                return {
                    ...state,
                    data: _.sortBy(state.data, [action.column]).reverse()
                }
            }
            return {
                column: action.column,
                data: _.sortBy(state.data, [action.column])
            }
        default:
            throw new Error()
    }
}


const Users = () => {
    const history = useHistory()
    const pushToUser = id => {
        history.push("/admin/user/"+id)
    }

    const [state, dispatch] = React.useReducer(exampleReducer, {
        column: null,
        data: [],
        direction: null,
    })
    const { data } = state 

    useEffect(() =>{
        const response = async () => { 
            const result =      
             await axios.get("http://localhost:80/user/users", {headers: { "Authorization" : "Bearer " + window.localStorage.getItem("token")}})
             console.log(result.data)
             dispatch({type: "LOAD_DATA", payload:result.data})
        }

        response()
    },[])


    return(
        <table className={classes.Users}>
            <thead>
            
                <tr>
                    <th onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'Telephone' })} >
                        Telephone
                    </th>
                    <th onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'Surname' })} >
                        Surname
                    </th>
                    <th onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'Name' })} >
                        Name
                    </th>
                    <th onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'Other' })} >
                        Other
                    </th>
                    <th onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'Birthday' })} >
                        Birthday
                    </th>
                    <th onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'Proffesion' })} >
                        Proffesion
                    </th>
                    <th onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'Address' })} >
                        Address
                    </th>
                </tr>
            </thead>
            <tbody>
                {data ? data.map((data) => (
                    <tr key={data.id} onClick={() => pushToUser(data.id)}>
                        <td>{data.telephone}</td>
                        <td>{data.surname}</td>
                        <td>{data.name}</td>
                        <td>{data.other}</td>
                        <td>{data.birthday ? data.birthday.split("T")[0] : null}</td>
                        <td>{data.proffesion}</td>
                        <td>{data.address}</td>
                    </tr>
                )) : null}
            </tbody>
        </table>
    )
}

export default Users

