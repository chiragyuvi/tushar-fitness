import { motion } from 'framer-motion';
import { Dumbbell, Menu } from 'lucide-react';

const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-darkest/90 backdrop-blur-md sticky top-0 z-50">
    <div className="flex items-center gap-2 text-gold font-bold text-2xl tracking-tighter">
      <Dumbbell size={32} />
      <span>TUSHAR FITNESS</span>
    </div>
    <div className="hidden md:flex gap-8 text-gray-300 font-medium">
      <a href="#home" className="hover:text-gold transition">Home</a>
      <a href="#services" className="hover:text-gold transition">Services</a>
      <a href="#plans" className="hover:text-gold transition">Plans</a>
    </div>
    <button className="bg-gold text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition">Join Now</button>
  </nav>
);

export default Navbar;