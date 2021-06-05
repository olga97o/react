import {mockedApiCall} from "../../api/mockedApi";

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const FETCH_ITEMS = 'FETCH_ITEMS';

export function fetchItems() {
    return (dispatch) => {
        mockedApiCall()
            .then(
                array => dispatch({
                    type: FETCH_ITEMS,
                    payload: {array}
                })
            )
    }
}

export function addItem(data) {
    return {
        type: ADD_ITEM,
        payload: {data}
    }
}

export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        payload: {id}
    }
}

export function logIn(data) {
    return {
        type: LOG_IN,
        payload: {data}
    }
}

export function logOut() {
    return {
        type: LOG_OUT,
        payload: {}
    }
}