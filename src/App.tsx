import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '../app/components/layout/Navbar';
import LandingPage from '../app/pages/Landing';
import PlaygroundPage from '../app/pages/Playground';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
