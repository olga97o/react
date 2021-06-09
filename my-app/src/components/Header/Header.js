import styles from './Header.module.scss';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {isLogout} from "../../services/loginService";

export default function Header({userData}) {

    const {firstName, lastName} = userData;

    let history = useHistory();
    let dispatch = useDispatch();

    const logout = () => {
        isLogout(dispatch);
        history.push('/login');
    }
    return (
        <header style={styles}>
            Hello, user! We are {lastName} {firstName}!
            <button type="submit" onClick={logout}>Logout</button>
        </header>
    );
}