import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop'; // Import ScrollToTop
import PageTransition from './components/common/PageTransition'; // Import PageTransition

// Import Pages
import Home from './pages/Home';
import WeddingInvitation from './pages/DigitalInvite/WeddingInvitation';
import DigitalInviteService from './pages/DigitalInvite/DigitalInviteService';
//import Gallery from './pages/Gallery';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        {/* Fixes the Scroll Issue */}
        <ScrollToTop /> 

        {/* Navbar shows on every page */}
        <Navbar />

        <div className="flex-grow">
          <Routes>
            {/* Wrap every element in PageTransition to add Motion */}
            
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />

            <Route path="/digital-invite-service" element={
              <PageTransition>
                <DigitalInviteService />
              </PageTransition>
            } />

            <Route path="/digital-invite-service/wedding-invite" element={
              <PageTransition>
                <WeddingInvitation />
              </PageTransition>
            } />

            <Route path="/gallery" element={
              <PageTransition>
                {/* <Gallery /> */}
              </PageTransition>
            } />

            <Route path="/services" element={
              <PageTransition>
                <Services />
              </PageTransition>
            } />

          </Routes>
        </div>

        {/* Footer shows on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;