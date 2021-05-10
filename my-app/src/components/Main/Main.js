import styles from './Main.module.scss';
import CardsContainer from "../Cards/CardsContainer";

export default function Main({avatar}) {
    const {alt, image} = avatar;

    return (
        <main style={styles}>
            <img src={image} alt={alt}/>
            <CardsContainer />
        </main>
    )
}