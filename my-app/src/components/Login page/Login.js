import styles from "./Login.module.scss";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isLogin} from "../../services/loginService";

export default function Login() {

    let userInput = {};

    let history = useHistory();
    let dispatch = useDispatch();
    const users = useSelector(state => state.usersArray);

    const submit = e => {
        e.preventDefault();
        let user = users.find(el => el.username === userInput['username'] && el.password === userInput['password']);

        if (user) {
            isLogin(dispatch, user);
            history.push("/profile");
        } else {
            console.log('error', user);
        }
    }

    function handleInputChange(e) {
        const target = e.target;
        const name = target.id;
        userInput[`${name}`] = `${target.value}`;
    }

    return (
        <form className={styles.login} onSubmit={submit}>
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" onChange={handleInputChange}/>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" onChange={handleInputChange}/>
            <button type="submit">Login</button>
        </form>
    )
}