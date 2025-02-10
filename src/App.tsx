import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../app/components/layout/Navbar';
import { Footer } from '../app/components/layout/Footer';
import LandingPage from '../app/pages/Landing';
import PlaygroundPage from '../app/pages/Playground';
import HowItWorksPage from '../app/pages/HowItWorks';
import LearnToEarnPage from '../app/pages/LearnToEarn';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/learn-to-earn" element={<LearnToEarnPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
