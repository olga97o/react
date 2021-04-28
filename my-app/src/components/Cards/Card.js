import styles from './Card.module.scss';

export default function Card({cardData}) {
    const {price, title, gender, imageUrl} = cardData;
    return (
        <div className={styles.card}>
            <aside>
                <p>Title: {title}</p>
                <p>Price: {price}</p>
                <p>Gender: {gender}</p>
            </aside>
            <img src={imageUrl} alt=""/>
        </div>
    )
}