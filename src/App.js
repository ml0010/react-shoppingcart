import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { useEffect, useState } from 'react';

function App() {

   return (
    <div className="App">
      <TourContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <CartSummary />
            <ScrollToTop />
            <Routes>
              <Route>
                <Route path='/' exact element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/tours' element={<Tours />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
              </Route>
            </Routes>
            <Footer />
          </Router>
        </CartContextProvider>
      </TourContextProvider>
    </div>
  );
}

export default App;
