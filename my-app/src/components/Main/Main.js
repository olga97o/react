import styles from './Main.module.scss';
import CardsContainer from "../Cards/CardsContainer";
import {mockedApiCall} from "../../api/mockedApi";
import {useEffect, useState} from "react";


export default function Main({avatar}) {
    const {alt, image} = avatar;

    return (
        <main>
            <img src={image} alt={alt}/>
            <CardsContainer /*onChange={setCardsArray} cardsData={cardsArray}*//>
        </main>
    )
}