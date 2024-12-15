import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Fotter/Footer';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import { analytics } from './config/firebase.config';
import { logEvent } from '@firebase/analytics';



// alalytics tracker
const AnalyticsTracker = () => {
  const location = useLocation();

  React.useEffect(() => {
    const logPageView = () => {
      logEvent(analytics, "page_view", {
        page_path: location.pathname,
      });
    }

    logPageView();
  },[location])

  return null;
}

const  App :React.FC = () =>  {
  return (
    <Router>
      <AnalyticsTracker />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
