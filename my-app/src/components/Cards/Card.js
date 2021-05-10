import styles from './Card.module.scss';

export default function Card({cardData, onClick}) {
    const {price, title, gender, imageUrl} = cardData;
    return (
        <div className={styles.card}>
            <button className={styles.buttonDelete} onClick={onClick}>X</button>
            <img className={styles.imgCard} src={imageUrl} alt=""/>
            <aside>
                <p>Title: {title}</p>
                <p>Price: {price}</p>
                <p>Gender: {gender}</p>
            </aside>

        </div>
    )
}