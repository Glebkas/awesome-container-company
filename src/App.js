import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Contactform from './components/Contactform';

function App() {
    const [showPopup, setShowPopup] = React.useState(false);

    const handlePopupToggle = () => {
        setShowPopup(!showPopup);
        console.log(showPopup);
    };

    return (
        <>
            {showPopup && <Contactform closePopup={handlePopupToggle} />}
            <Header openPopUp={handlePopupToggle} />
            <Main openPopUp={handlePopupToggle} />
            <Footer />
        </>
    );
}

export default App;
