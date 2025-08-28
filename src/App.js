import './App.css';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer.jsx';

import { CartContextProvider } from './contexts/cart-context.jsx';
import { CartSummary } from './components/cart/cart-summary.jsx';
import { useLayoutEffect } from 'react';

import { BookingContextProvider } from './contexts/booking-context.jsx';
import { AuthenticationContextProvider } from './contexts/authentication-context.jsx';

import { PaymentContextProvider } from './contexts/payment-context.jsx';
import { RoutesWithAnimation } from './components/routes.jsx';

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
                            <PaymentContextProvider>
                                <PageTopWrapper>
                                    <RoutesWithAnimation />
                                </PageTopWrapper>
                            </PaymentContextProvider>
                            <Footer />
                            <Navbar />
                            <CartSummary />
                        </BookingContextProvider>
                    </CartContextProvider>
                </AuthenticationContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
