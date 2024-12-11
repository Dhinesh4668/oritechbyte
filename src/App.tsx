import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Fotter/Footer';
import HomePage from './pages/Home/HomePage';
// import AboutPage from './pages/About/AboutPage'; // Assuming this page exists

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
