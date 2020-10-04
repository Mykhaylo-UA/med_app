import React from "react"
import classes from "./Message.module.css"

const Message = props =>{
    let cl = [classes.Back]

    if(props.me){
        cl.push(classes.Yellow)
    }
    else{
        cl.push(classes.Green)
    }

    return(
        <div className={cl.join(" ")}>
            <div className={classes.Message}>
                <h4>{props.children}</h4>
            </div>
        </div>
    )
}

export default Message