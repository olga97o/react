import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import './App.scss';
import styles from './App.scss';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import Profile from "../components/Profile page/Profile";
import Login from "../components/Login page/Login";

export default function App({userData}) {
    const {user, avatar} = userData;

    return (
        <Router>
            <Header userData={user}/>
                <li>
                    <Link to="/login"> Login</Link>
                </li>
                <li>
                    <Link to="/profile"> Profile</Link>
                </li>
                <li>
                    <Link to="/main"> Main</Link>
                </li>
            <Switch>
                <Route path="/main" component={() => <Main avatar={avatar}/>}/>
                <Route exact path="/login" component={() => <Login />}/>
                <Route path="/profile" component={() => <Profile /> }/>
            </Switch>
            <Footer/>
        </Router>
    );
}

