import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';
import App from './App/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from "./store/reducers/cardsArray";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

const myStore = {
    user: {
        firstName: 'Shop',
        lastName: 'Online'
    },
    avatar: {
        image : 'https://st2.depositphotos.com/4142621/6898/i/600/depositphotos_68989301-stock-photo-online-shopping-concept-3d-render.jpg',
        alt: 'Online shop'
    }
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
let root = document.getElementById('root');
root.style.height = '100%';

ReactDOM.render(
    <Provider store={store}>
    <App userData = {myStore}/>
    </Provider>,
  root
);
