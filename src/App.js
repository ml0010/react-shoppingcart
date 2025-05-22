import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import Footer from './pages/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route>

          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
