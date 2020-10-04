import React from "react"
import classes from "./Table.module.css"

const Table = props =>{
    return (
        <table className={classes.Table}>
            <thead>
                <tr>
                    {props.headers.map((element, index) => <td key={index+1}>{element}</td>)}
                </tr>
            </thead>
            <tbody>
                {
                    props.elements.map((element, index) => 
                    {
                        return <tr key={index}>
                            { element.map((el, ind) =>  <td key={ind*(index+1)}>{el}</td> ) }
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Table