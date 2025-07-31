import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutLanguages from './pages/AboutLanguages';
import RevivalReconciliation from './pages/RevivalReconciliation';
import FlashcardGame from './pages/FlashcardGame';
import Media from './pages/Media';
import Citations from './pages/Citations';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename="/EFPInquiryProject">
      <ScrollToTop />
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutLanguages />} />
            <Route path="/revival" element={<RevivalReconciliation />} />
            <Route path="/learn" element={<FlashcardGame />} />
            <Route path="/media" element={<Media />} />
            <Route path="/citations" element={<Citations />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
