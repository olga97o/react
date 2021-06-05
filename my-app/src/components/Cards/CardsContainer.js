import React, {useCallback, useEffect} from "react";
import Card from './Card';
import CardsCreationForm from "./CardsCreationForm";
import styles from './CardsContainer.module.scss';
import {useSelector, useDispatch, useStore} from "react-redux";
import {addItem, deleteItem, fetchItems} from "../../store/actions/cardsData";

export default function CardsContainer() {

    const store = useStore();
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cardsArray);

    useEffect(() => {
        dispatch(fetchItems())
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