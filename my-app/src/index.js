import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';
import App from './App/App';

const store = {
    user: {
        firstName: 'Shop',
        lastName: 'Online'
    },
    avatar: {
        image : 'https://st2.depositphotos.com/4142621/6898/i/600/depositphotos_68989301-stock-photo-online-shopping-concept-3d-render.jpg',
        alt: 'Online shop'
    }
}
ReactDOM.render(
    <App userData = {store}/>,
  document.getElementById('root')
);
