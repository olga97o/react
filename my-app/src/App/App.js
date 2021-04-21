import './App.scss';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import styles from './App.scss';

function App({userData}) {
    const {user, avatar} = userData
    return (
        <>
            <Header userData={user}/>
            <Main avatar={avatar}/>
            <Footer/>
        </>
    );
}

export default App;
