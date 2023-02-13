import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import CoinDetails from './components/CoinDetails';
import Footer from './components/Footer';
import Preloader from './components/Preloader'

function App() {
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? <Preloader /> :
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/coins' element={<Coins />} />
            <Route path='/exchanges' element={<Exchanges />} />
            <Route path='/coins/:id' element={<CoinDetails />} />
          </Routes>
          <Footer />
        </Router>}
    </>
  );
}

export default App;
