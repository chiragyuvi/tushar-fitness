import { motion } from 'framer-motion';
import { Dumbbell, Menu } from 'lucide-react';
const Hero = () => (
  <section className="relative h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10"
    >
      <h1 className="text-6xl md:text-8xl font-black text-white mb-4">EVOLVE YOUR <span className="text-gold">LIMITS</span></h1>
      <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-8">Premium fitness experience starting from ₹8,000.</p>
      <button className="border-2 border-gold text-gold px-10 py-4 rounded-md font-bold hover:bg-gold hover:text-black transition-all duration-300">
        EXPLORE PACKAGES
      </button>
    </motion.div>
  </section>
);
export default Hero;