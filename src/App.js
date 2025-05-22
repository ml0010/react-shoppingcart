import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './pages/footer';
import { Cart } from './pages/cart';
import { Tours } from './pages/tours.jsx';
import { Home } from './pages/home.jsx';
import { Contact } from './pages/contact.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/tours' element={<Tours />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
