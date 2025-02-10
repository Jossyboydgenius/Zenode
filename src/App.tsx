import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from '../app/components/layout/Navbar';
import { Footer } from '../app/components/layout/Footer';
import LandingPage from '../app/pages/Landing';
import PlaygroundPage from '../app/pages/Playground';
import HowItWorksPage from '../app/pages/HowItWorks';
import LearnToEarnPage from '../app/pages/LearnToEarn';
import LoginPage from '../app/pages/Login';
import SignupPage from '../app/pages/Signup';
import DashboardPage from '../app/pages/Dashboard';

// Layout wrapper component
function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);
  const isDashboardPage = location.pathname.startsWith('/dashboard');

  if (isDashboardPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {!isAuthPage && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
}

// Protected Route component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  // TEMPORARY: Set to true for testing purposes
  // TODO: REMOVE THIS AND IMPLEMENT PROPER AUTHENTICATION
  const isAuthenticated = true; // <-- Remove this line when implementing real auth

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/learn-to-earn" element={<LearnToEarnPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}
