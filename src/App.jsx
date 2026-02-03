import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact'; // Import this
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white">
      <Navbar />
      <Hero />
      <div className="h-24 bg-gradient-to-b from-black to-[#0A0A0A]" /> {/* Spacer */}
      <Services />
      <Pricing />
      <Contact />
      <FAQ/>
      <footer className="py-12 text-center text-gray-700 bg-black uppercase tracking-[0.5em] text-xs">
        Tushar Fitness • Sector 2 Karanjade • Est 2026
      </footer>
    </div>
  );
}
export default App;