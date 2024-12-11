import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SEO from './components/SEO';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<><SEO title="Home" /><Home /></>} />
          <Route path="/about" element={<><SEO title="About" /><About /></>} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
