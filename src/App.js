import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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

function App() {

   return (
    <div className="App">
      <TourContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <CartSummary />
            <ScrollToTop />
            <Routes>
                <Route index element={<Navigate to="/home" />} />
                <Route path='/*' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/tours' element={<Tours />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </TourContextProvider>
    </div>
  );
}

export default App;
