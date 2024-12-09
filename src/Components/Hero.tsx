import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">
          East Africa Mineral Insights
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Exploring the rich mineral wealth of East Africa through data-driven insights,
          sustainable practices, and comprehensive market analysis.
        </p>
        <button 
          onClick={() => navigate('/minerals')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
        >
          Explore Minerals
        </button>
      </div>
    </div>
  );
};

export default Hero;
