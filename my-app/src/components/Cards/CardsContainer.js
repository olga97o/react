import React, {useCallback, useEffect} from "react";
import Card from './Card';
import CardsCreationForm from "./CardsCreationForm";
import styles from './CardsContainer.module.scss';
import {useSelector, useDispatch} from "react-redux";
import {addItem, deleteItem, fetchItems} from "../../store/actions/cardsData";

export default function CardsContainer() {

    const dispatch = useDispatch();
    const cards = useSelector(state => state.cardsArray);
    let auth = useSelector(state => state.authStatus);

    useEffect(() => {
        if (!!auth.length) {
            dispatch(fetchItems())
        }
    }, [])

    const handleAddNewCard = useCallback((valueInput) => {
        dispatch(addItem(valueInput))
    }, [dispatch])

    const handleDeleteCard = useCallback((id) => {
        dispatch(deleteItem(id))
    }, [dispatch])

    return (
        <>
            <CardsCreationForm onSubmit={handleAddNewCard}/>
            {!!cards.length ?
                <div className={styles.cardsContainer}>
                    {cards.map((card) =>
                        <Card
                            key={card.id}
                            onClick={() => handleDeleteCard(card.id)}
                            cardData={card}/>
                    )}
                </div>
                :
                <div>No cards yet.</div>
            }
        </>
    )
}