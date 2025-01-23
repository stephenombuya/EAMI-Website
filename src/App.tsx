import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Minerals from './pages/Minerals';
import Logistics from './pages/Logistics';
import Market from './pages/Market';
import Governance from './pages/Governance';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
      cacheTime: 10 * 60 * 1000, // Cache is kept for 10 minutes
      retry: 2,
      refetchOnWindowFocus: false,
      suspense: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/minerals" element={<Minerals />} />
                <Route path="/logistics" element={<Logistics />} />
                <Route path="/market" element={<Market />} />
                <Route path="/governance" element={<Governance />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
