import React, {useCallback, useEffect, useRef, useState} from "react";
import {mockedApiCall} from "../../api/mockedApi";
import Card from './Card';
import CardsCreationForm from "./CardsCreationForm";
import styles from './CardsContainer.module.scss';

export default function CardsContainer() {
    const [cardsArray, setCardsArray] = useState([]);

    useEffect(() => {
        mockedApiCall().then(data => setCardsArray(data))
    })
    //const [cardsArray, setCardsArray] = cardsData;

    function handleAddNewCard (valueInput) {
        setCardsArray([
            ...cardsArray,
            valueInput
        ]);
        console.log('before', cardsArray);
        console.log('valueInput', valueInput);
    }


    function handleDeleteCard() {

        //setCardsArray, clickedSubmitButtonForm
        //cardsArray.splice(card.key, cardKey)
    }

    return (
        <>
            <CardsCreationForm onSubmit={handleAddNewCard}/>
            {!!cardsArray.length ?
                <div className={styles.cardsContainer}>
                    {cardsArray.map((card) => <Card key={card.id} onClick={handleDeleteCard} cardData={card}/>)}
                </div>
                :
                <div>No cards yet.</div>
            }
        </>
    )
}