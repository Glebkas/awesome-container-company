import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import data from './utils/data';

function App() {
    const [showPopup, setShowPopup] = React.useState(false);

    const appData = data;
    const handlePopupToggle = () => {
        setShowPopup(!showPopup);
        console.log(showPopup);
    };

    return (
        <>
            {showPopup && <ContactForm closePopup={handlePopupToggle} />}
            <Header openPopUp={handlePopupToggle} />
            <Main appData={appData} openPopUp={handlePopupToggle} />
            <Footer appData={appData} />
        </>
    );
}

export default App;
