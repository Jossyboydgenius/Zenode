import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/Footer';
import LandingPage from '@/pages/Landing';
import PlaygroundPage from '@/pages/Playground';
import HowItWorksPage from '@/pages/HowItWorks';
import LearnToEarnPage from '@/pages/LearnToEarn';
import LoginPage from '@/pages/Login';
import SignupPage from '@/pages/Signup';
import DashboardPage from '@/pages/Dashboard';
import { SidebarProvider } from '@/components/ui/sidebar';

// Protected Route component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  // TEMPORARY: Set to true for testing purposes
  // TODO: REMOVE THIS AND IMPLEMENT PROPER AUTHENTICATION
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

// Layout wrapper for public pages
function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with Navbar and Footer */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <LandingPage />
            </PublicLayout>
          }
        />
        <Route
          path="/playground"
          element={
            <PublicLayout>
              <PlaygroundPage />
            </PublicLayout>
          }
        />
        <Route
          path="/how-it-works"
          element={
            <PublicLayout>
              <HowItWorksPage />
            </PublicLayout>
          }
        />
        <Route
          path="/learn-to-earn"
          element={
            <PublicLayout>
              <LearnToEarnPage />
            </PublicLayout>
          }
        />

        {/* Auth routes without layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Dashboard routes with Sidebar */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <SidebarProvider>
                <DashboardPage />
              </SidebarProvider>
            </ProtectedRoute>
          }
        />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
