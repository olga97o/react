import React, {useEffect, useState} from "react";
import {mockedApiCall} from "../../api/mockedApi";
import Card from './Card';
import styles from './CardsContainer.module.scss';

export default class CardsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        mockedApiCall().then(data => {
            this.setState({cards: data})
        })
    }

    render() {

        return (
            this.state.cards ?
                <div className={styles.cardsContainer}>
                    {this.state.cards.map((card) => <Card key={card.id} cardData={card}/>)}
                </div>
                :
                <div>No cards yet.</div>
        )
    }
}

//export default CardsContainer;