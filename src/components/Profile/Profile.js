import React, {useEffect} from "react"
import classes from "./Profile.module.css"
import Table from "../Table/Table"
import {profileLoad} from "../../redux/actionCreators"
import {connect} from "react-redux"

const Profile = props =>{
    useEffect(()=>{
        if(props.profileState === false)
        {        
            props.profileLoad()
        }
    }, []) // eslint-disable-line

    let name = "";
    if(props.profile.surname !== null)
    {
        name += props.profile.surname;
    }
    if(props.profile.name !== null)
    {
        name += " " + props.profile.name;
    }
    if(props.profile.other !== null)
    {
        name += " " +props.profile.other;
    }

    let age = 1;

    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

    let dob = new Date(props.profile.birthday);

    let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate())
    age = today.getFullYear() - dob.getFullYear();

    if(today < dobnow){
        age -= 1;
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

    return (
        <main className={classes.Profile}>
            <div>
                <div className={classes.General+" " +classes.Background}>
                    <h1> {name === "" ? "None" : name} <span className={classes.Line}></span> <span>{props.profile.proffesion === null ? "None" : props.profile.proffesion}</span></h1>
                    <div>
                        <div>
                            <span className={classes.Text}>Birthday</span> :
                            <span className={classes.Description}>{props.profile.birthday === null ? "None" : props.profile.birthday.split("T")[0]}</span>
                            <span className={classes.Text}>Age</span> :
                            <span className={classes.Description}>{props.profile.birthday === null ? "None" : age}</span>
                        </div>
                        <div>
                            <span className={classes.Text}>Sex</span> :
                            <span className={classes.Description}>man</span>
                        </div>
                        <div>
                            <span className={classes.Text}>Telephone</span> :
                            <span className={classes.Description}>{props.profile.telephone}</span>
                        </div>
                        <div>
                            <span className={classes.Text}>Address</span> :
                            <span className={classes.Description}>{props.profile.address === null ? "None" : props.profile.address}</span>
                        </div>
                    </div>
                </div>
                <div className={classes.General}>
                    <h2 className={classes.Yellow}>Treatment</h2>
                    <div>
                        <Table 
                            headers={["Name", "Count", "Per day", "Other" ]}
                            elements={[["Aspirin", "1 table", "3/day", "-"], ["Aspirin", "1 table", "3/day", "-"]]}    
                        />
                    </div>
                </div>
                <div className={classes.General}>
                    <h2 className={classes.Purple}>History of diseases</h2>
                    <div>
                        <Table 
                            headers={["Disease", "Start", "Finish", "Other" ]}
                            elements={array}    
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className={classes.General}>
                    <h2 className={classes.Green}>Advertisment</h2>
                    <div>
                        <div className={classes.Advert}>
                            <h4>Header</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        </div>
                        <div className={classes.Advert}>
                            <h4>Header</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        </div>
                        <div className={classes.Advert}>
                            <h4>Header</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

function mapStateToProps(state){
    return{
        profileState: state.profileState,
        profile: state.profile
    }
}

function mapDispatchToProps(dispatch){
    return{
        profileLoad : () => dispatch(profileLoad())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)