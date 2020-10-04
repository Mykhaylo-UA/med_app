import React from "react"
import classes from "./Chat.module.css"
import sendSVG from "../../svg/send.svg"
import Message from "../Message/Message"

const Chat = () =>{

    return(
        <main className={classes.Chat}>
            <div> 
                <div className={classes.Block + " " + classes.VideoDiv}></div>
                <div className={classes.ButtonVideo}> Video call</div>
            </div>
            <div>
                <div className={classes.Block + " " + classes.ChatDiv}>
                    <div className={classes.Messages}>
                        <Message me > Доброго дня. я ваш лікуючий лікар Михайлов Михайло Йосипович</Message>
                        <Message me > asd asdasd asd as das </Message>
                        <Message> asd asdas asd as asd asasd as sad as </Message>

                        <Message> Last message </Message>
                    </div>
                    <div className={classes.Input}>
                        <input type="text" placeholder="Write text"/>
                        <div><img alt={""} src={sendSVG} /></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Chat