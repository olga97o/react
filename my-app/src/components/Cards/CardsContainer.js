import React, {useEffect, useState} from "react";
import {mockedApiCall} from "../../api/mockedApi";
import Card from './Card';
import CardsCreationForm from "./CardsCreationForm";
import styles from './CardsContainer.module.scss';

export default function CardsContainer() {
    const [cardsArray, setCardsArray] = useState([]);

    useEffect(() => {
        mockedApiCall().then(data => setCardsArray(data))
    }, cardsArray)

    function handleAddNewCard(valueInput) {
        setCardsArray([
            ...cardsArray,
            valueInput
        ]);
    }

    function handleDeleteCard(id) {
        setCardsArray(
            cardsArray.filter(card => card.id !== id)
        )
        /*const idx = cardsArray.findIndex(card => card.id !== id)
        setCardsArray([
            ...cardsArray.slice(0, idx),
            ...cardsArray.slice(idx + 1)
        ]);*/
    }

    return (
        <>
            <CardsCreationForm onSubmit={handleAddNewCard}/>
            {!!cardsArray.length ?
                <div className={styles.cardsContainer}>
                    {cardsArray.map((card) => <Card key={card.id} onClick={() => handleDeleteCard(card.id)} cardData={card}/>)}
                </div>
                :
                <div>No cards yet.</div>
            }
        </>
    )
}