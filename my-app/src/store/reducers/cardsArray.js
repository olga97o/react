import {ADD_ITEM, DELETE_ITEM, FETCH_ITEMS, LOG_IN, LOG_OUT} from '../actions/cardsData';
import {combineReducers} from "redux";

const initialState = {
    cards: [],
    users : [
        {
            username: "user123",
            password: "123456"
        },
        {
            username: "user124",
            password: "111111"
        },
        {
            username: "user125",
            password: "666666"
        }
    ],
    loggedUser: []
};

function cardsArray( state = initialState.cards, action) {
    switch (action.type) {
        case FETCH_ITEMS: {
            return action.payload.array;
        }
        case ADD_ITEM: {
            return [...state, action.payload.data]
        }
        case DELETE_ITEM: {
            const newState = [...state];
            return newState.filter(card => card.id !== action.payload.id);
            /*console.log(newState.filter(card => card.id !== action.payload.id));
            return newState;*/
        }
        default:
            return state;
    }
}

function usersArray(state = initialState.users, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function authStatus( state = initialState.loggedUser, action) {
    switch (action.type) {
        case LOG_IN: {
            return [...state, action.payload.data]
        }
        case LOG_OUT: {
            const newState = [...state]
            newState.splice(0)
            return newState;
        }
        default:
            return state;
    }
}

export const rootReducer = combineReducers({cardsArray, usersArray, authStatus})