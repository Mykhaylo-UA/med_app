import React, {useEffect} from "react"
import classes from "./Alert.module.css"
import {closeAlert} from "../../redux/actionCreators"
import {connect} from "react-redux"

const Alert = props =>{

    useEffect(()=>{
        if(props.timeout > 0)
        {
            setTimeout(props.closeAlert, props.timeout)
        }
    }, [props.timeout]) //eslint-disable-line

    let classik = [classes.Alert]

    if(props.status === "success"){
        classik.push(classes.AlertSuccess)
    }
    else if(props.status === "error"){
        classik.push(classes.AlertError)
    }
    else{
        classik.push(classes.AlertDefault)
    }

    return(
        <div className={classik.join(" ")}>
            {props.children}
        </div>
    )
}

function mapDispatchToProps(dispatch)
{
    return {
        closeAlert: () => dispatch(closeAlert())
    }
}

export default connect(null, mapDispatchToProps)(Alert)