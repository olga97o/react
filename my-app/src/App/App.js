import './App.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

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
