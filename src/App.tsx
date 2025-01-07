import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Fotter/Footer';
import { analytics } from './config/firebase.config';
import { logEvent } from '@firebase/analytics';
import PageNotFound from './pages/404/404';

// Lazy-loaded components
const HomePage = React.lazy(() => import('./pages/Home/HomePage'));
const AboutPage = React.lazy(() => import('./pages/About/AboutPage'));

// Analytics Tracker Component
const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const logPageView = () => {
      logEvent(analytics, 'page_view', {
        page_path: location.pathname,
      });
    };

    logPageView();
  }, [location]);

  return null;
};

// Main App Component
const App: React.FC = () => {
  return (
    <Router>
      <AnalyticsTracker />
      <Header />
      <main style={{ flex: 1 }}>
        {/* Suspense wraps lazy-loaded components */}
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
