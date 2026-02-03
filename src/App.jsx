import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="bg-darkest min-h-screen font-sans selection:bg-gold selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <footer className="py-10 text-center text-gray-600 border-t border-gray-900">
        <p>© 2026 Tushar Fitness. Built for Strength.</p>
      </footer>
    </div>
  );
}

export default App;