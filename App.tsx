import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Minerals from './pages/Minerals';
import Logistics from './pages/Logistics';

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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;