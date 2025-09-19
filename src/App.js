import './App.css';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer.jsx';
import { CartContextProvider } from './contexts/cart-context.jsx';
import { useLayoutEffect } from 'react';
import { BookingContextProvider } from './contexts/booking-context.jsx';
import { AuthenticationContextProvider } from './contexts/authentication-context.jsx';
import { RoutesWithAnimation } from './components/routes.jsx';
import PopupMessage from './components/popup/popup-message.js';
import { PopupContextProvider } from './contexts/popup-context.jsx';

function App() {
    
    const PageTopWrapper = ({ children }) => {
        const location = useLocation();
        useLayoutEffect(() => {
            // Scroll to the top of the page when the route changes
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }, [location.pathname]);
        return children;
    };

    return (
        <div className="App">
            <BrowserRouter basename="/react-shoppingcart">
                <AuthenticationContextProvider>
                    <CartContextProvider>
                        <BookingContextProvider>
                            <PopupContextProvider>
                                <PageTopWrapper>
                                    <RoutesWithAnimation />
                                </PageTopWrapper>
                                <Footer />
                                <Navbar />
                                <PopupMessage />
                            </PopupContextProvider>
                        </BookingContextProvider>
                    </CartContextProvider>
                </AuthenticationContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
