import React, {useEffect} from 'react';
import './App.css';
import MainPage from "./components/MainPage/MainPage"
import Layout from "./components/Layout/Layout"
import Profile from "./components/Profile/Profile"
import Chat from "./components/Chat/Chat"
import Settings from "./components/Settings/Settings"
import SignUp from "./components/SignUp/SignUp"
import Alert from "./components/Alert/Alert"

import Users from "./components/Admin/Users/Users"
import User from "./components/Admin/User/User"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {connect} from "react-redux"

import {authorizationVisit} from "./redux/actionCreators"

const App = props => {

  useEffect(()=>{
    props.authorizationVisit()
  }, []) // eslint-disable-line

  return (
    <React.Fragment >
      <Router>
        <Switch>

            <Route exact path="/">
                <MainPage />
            </Route>

            {props.isAuthenticate ?
              <React.Fragment>
                <Route path="/me">
                  <Layout>
                    <Profile />
                  </Layout>
                </Route>

                <Route path="/chat">
                  <Layout>
                    <Chat />
                  </Layout>
                </Route>

                <Route path="/settings">
                  <Layout>
                    <Settings />
                  </Layout>
                </Route>

                <Route path="/signup">
                  <Layout>
                    <SignUp />
                  </Layout>
                </Route>
                  
                <Route path="/admin" exact>
                    <Users />
                </Route>

                <Route path="/admin/user/:id" >
                  <User />
                </Route>
              </React.Fragment>
            : null
            }


            {/*<Redirect to={"/"} />*/}
          </Switch>
      </Router>

      {props.alert.state ? <Alert status={props.alert.status} timeout={props.alert.timeout}>{props.alert.text}</Alert> : null}
    </React.Fragment>
  );
}

function mapStateToProps(state)
{
  return {
    isAuthenticate : state.isAuthenticate,
    alert: state.alert
  }
}
function mapDispatchToProps(dispatch)
{
  return {
    authorizationVisit: () => dispatch(authorizationVisit())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);