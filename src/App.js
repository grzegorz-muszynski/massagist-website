import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ForPatient from './pages/ForPatient';
import Header from './components/Header';
import Location from './pages/Location';
import Menu from './components/Menu';
import Offer from './pages/Offer';
import Opinions from './pages/Opinions';
import Prices from './pages/Prices';
import Start from './pages/Start';
import Vouchers from './pages/Vouchers';

function App() {
  return (
    <Router>
      <div id='App'>
        <Header />
        <Menu />
        <Routes>
          <Route exact path='/' element={<Start />} />
          <Route path='/about' element={<About />} />
          <Route path='/offer' element={<Offer />} />
          <Route path='/prices' element={<Prices />} />
          <Route path='/forpatient' element={<ForPatient />} />
          <Route path='/vouchers' element={<Vouchers />} />
          <Route path='/location' element={<Location />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/opinions' element={<Opinions />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;