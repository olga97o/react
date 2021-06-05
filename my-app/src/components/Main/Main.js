import styles from './Main.module.scss';
import CardsContainer from "../Cards/CardsContainer";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Main({avatar}) {
    const {alt, image} = avatar;

    let history = useHistory();
    const auth = useSelector(state => state.authStatus);

    if (auth.length === 0) {
        history.push('/login');
    }

    return (
        <main style={styles}>
            <img src={image} alt={alt}/>
            <CardsContainer />
        </main>
    )
}