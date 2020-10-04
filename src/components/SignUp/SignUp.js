import React, {useEffect, useState} from "react"
import classes from "./SignUp.module.css"

const SignUp = () =>{
    const time =["08:00","08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"]

    const [dates, setDate] = useState([])

    const [number, setNumber] = useState(6);

    useEffect(()=>{
        const da = new Date();
        da.setDate(da.getDate() + number - 6)

        let date = [da];

        for(let i = 0; i < 6; i++){
        
            let day = new Date();
            day.setDate(day.getDate() + i + 1  + number - 6);

            date = date.concat(day)
        }
        setDate(date)

    }, [number]) // eslint-disable-line


    const getNameDay = number =>{
        switch(number)
        {
            case 0: return "Sunday"
            case 1: return "Monday"
            case 2: return "Thuesday"
            case 3: return "Wednesday"
            case 4: return "Thursday"
            case 5: return "Friday"
            case 6: return "Saturday"
            default: return "none"
        }
    }

    const clickLeftVector = () =>{
        if(number <= 6)
        {
            return;
        }
        else{
            setNumber(number - 6);
        }
    }

    const clickRightVector = () =>{
        setNumber(number + 6);
    }

    return(
        <main className={classes.SignUp}>
            <div>
                <h2>Make an appointment</h2>
                <div>
                    <div onClick={clickLeftVector} className={classes.Vector + " " + classes.VectorLeft}></div>
                    <div className={classes.TableDiv}><table className={classes.Table}>
                        <thead>
                            <tr>
                                {
                                    dates.map(
                                    (day, index) => (
                                        <td key={index+1}>
                                            <div>{number <= 6 ? index === 0 ? "Today" : index === 1 ? "Tommorow" : getNameDay(day.getDay()) : getNameDay(day.getDay())}</div>
                                            <div>{(day.getDate() <= 9 ? "0" + day.getDate() : day.getDate()) +"."+(day.getMonth() <= 9 ? "0"+day.getMonth() : day.getMonth())+"."+day.getFullYear()}</div>
                                        </td>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {
                                    dates.map((day, index) => <td key={index+1}>{time.map((time, ind) => <div className={classes.Button} key={(index+1)*ind}>{time}</div>)}</td>)
                                }
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div onClick={clickRightVector} className={classes.Vector + " " + classes.VectorRight}></div>
                </div>
            </div>
        </main>
    )
}

export default SignUp