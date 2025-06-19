import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer.jsx';
import { Cart } from './pages/cart';
import { Tours } from './pages/tours.jsx';
import { Home } from './pages/home.jsx';
import { Contact } from './pages/contact.jsx';
import { TourContextProvider } from './context/tour-context.jsx'
import { CartContextProvider } from './context/cart-context.jsx';
import { CartSummary } from './components/cart-summary.jsx';
import { ScrollToTop } from './components/scroll-to-top.jsx';
import { useLayoutEffect } from 'react';
import { Booking } from './pages/booking.jsx';
import { BookingConfirmation } from './components/booking-confirmation.jsx';
import { BookingSearch } from './pages/booking-search.jsx';
import { BookingContextProvider } from './context/booking-context.jsx';

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
            <TourContextProvider>
                <CartContextProvider>
                    <BookingContextProvider>
                        <BrowserRouter>
                            <PageTopWrapper>
                                <Routes>
                                    <Route index element={<Navigate to="/home" />} />
                                    <Route path='/*' element={<Home />}></Route>
                                    <Route path='/home' element={<Home />}></Route>
                                    <Route path='/tours' element={<Tours />}></Route>
                                    <Route path='/contact' element={<Contact />}></Route>
                                    <Route path='/cart' element={<Cart />}></Route>
                                    <Route path='/booking' element={<Booking />}></Route>
                                    <Route path='/confirmation' element={<BookingConfirmation />}></Route>
                                    <Route path='/mybooking' element={<BookingSearch />}></Route>
                                </Routes>
                            </PageTopWrapper>
                            <Footer />
                            <Navbar />
                            <ScrollToTop />
                            <CartSummary />
                        </BrowserRouter>
                    </BookingContextProvider>
                </CartContextProvider>
            </TourContextProvider>
        </div>
    );
}

export default App;
