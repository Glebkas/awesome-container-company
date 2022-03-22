import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { MContactForm } from './components/ContactForm';
import data from './utils/data';
import { AnimatePresence } from 'framer-motion';

function App() {
    const [showPopup, setShowPopup] = React.useState(false);

    const appData = data;
    const handlePopupToggle = () => {
        setShowPopup(!showPopup);
        console.log(showPopup);
    };

    return (
        <>
            <AnimatePresence>
                {showPopup && (
                    <MContactForm
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        exit={{ opacity: 0 }}
                        closePopup={handlePopupToggle}
                    />
                )}
            </AnimatePresence>

            <Header openPopUp={handlePopupToggle} />
            <Main appData={appData} openPopUp={handlePopupToggle} />
            <Footer appData={appData} />
        </>
    );
}

export default App;
