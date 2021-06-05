import styles from './Header.module.scss';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logOut} from "../../store/actions/cardsData";

export default function Header({userData}) {

    const {firstName, lastName} = userData;

    let history = useHistory();
    let dispatch = useDispatch();

    const logout = () => {
        dispatch(logOut());
        history.push('/login');
    }
    return (
        <header style={styles}>
            Hello, user! We are {lastName} {firstName}!
            <button type="submit" onClick={logout}>Logout</button>
        </header>
    );
}