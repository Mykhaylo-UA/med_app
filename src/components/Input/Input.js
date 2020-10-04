import React from "react"
import classes from "./Input.module.css"

const Input = props =>{
    return(
        <div className={classes.Input} style={props.style}>
            <label htmlFor={props.id}>{props.text}</label>
            <input id={props.id} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        </div>
    )
}

export default Input