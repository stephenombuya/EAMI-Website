import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Minerals from './pages/Minerals';
import Logistics from './pages/Logistics';
import Market from './pages/Market';
import Governance from './pages/Governance';

function App() {
  return (
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
  );
}

export default App;
