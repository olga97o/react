import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';
import App from './App/App';

const store = {
    user: {
        firstName: 'Robot',
        lastName: 'Mr'
    },
    avatar: {
        image : 'https://xakep.ru/wp-content/uploads/2016/07/mr-robot-season-2.jpg',
        alt: 'mr robot'
    }
}
ReactDOM.render(
    <App userData = {store}/>,
  document.getElementById('root')
);
