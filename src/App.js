import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer.jsx';
import { Cart } from './pages/cart';
import { Tours } from './pages/tours.jsx';
import { Home } from './pages/home.jsx';
import { Contact } from './pages/contact.jsx';
import { TourContextProvider } from './context/tour-context'


function App() {
  return (
    <div className="App">
      <TourContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route>
              <Route path='/' exact element={<Home />}></Route>
              <Route path='/tours' element={<Tours />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
            </Route>
          </Routes>
          <Footer />
        </Router>
      </TourContextProvider>
    </div>
  );
}

export default App;
