import styles from './Main.module.scss';

export default function Main({avatar}) {
    const {alt, image} = avatar;

    return (
        <>
            <img src={image} alt={alt}/>
        </>
    )
}