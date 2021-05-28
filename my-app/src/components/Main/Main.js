import styles from './Main.module.scss';
import CardsContainer from "../Cards/CardsContainer";
import {useHistory} from "react-router-dom";

export default function Main({avatar}) {
    const {alt, image} = avatar;

    let history = useHistory();

    if (!JSON.parse(sessionStorage.getItem('user'))) {
        history.push('/login');
    }

    return (
        <main style={styles}>
            <img src={image} alt={alt}/>
            <CardsContainer />
        </main>
    )
}