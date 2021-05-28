import styles from './Header.module.scss';
import {useHistory} from "react-router-dom";

export default function Header ({userData}) {

    const {firstName, lastName} = userData;

    let history = useHistory();

    const logout = () => {
        sessionStorage.clear();
        history.push('/login');
    }
    return (
        <header style={styles}>
        Hello, user! We are {lastName} {firstName}!
            <button type="submit" onClick={logout}>Logout</button>
        </header>
    );
}