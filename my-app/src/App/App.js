import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import './App.module.scss';
import styles from './App.module.scss';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import Profile from "../components/Profile page/Profile";
import Login from "../components/Login page/Login";

export default function App({userData}) {
    const {user, avatar} = userData;

    return (
        <Router>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                <Header userData={user}/>
                <ul>
                    <li>
                        <Link to="/login"> Login</Link>
                    </li>
                    <li>
                        <Link to="/profile"> Profile</Link>
                    </li>
                    <li>
                        <Link to="/main"> Main</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/main" component={() => <Main avatar={avatar}/>}/>
                    <Route exact path="/login" component={() => <Login/>}/>
                    <Route path="/profile" component={() => <Profile/>}/>
                </Switch>
                </div>
            </div>
            <Footer/>
        </Router>
    );
}

