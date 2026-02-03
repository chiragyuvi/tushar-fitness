import { motion } from 'framer-motion';
import { Package, CheckCircle, ShieldCheck } from 'lucide-react';

const Pricing = () => (
  <section id="plans" className="py-32 bg-black px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
        ONE PLAN. <span className="text-[#D4AF37]">UNLIMITED POWER.</span>
      </h2>
      <p className="text-gray-500 mb-12 text-lg">Elite fitness shouldn't be complicated.</p>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-[#111] border-2 border-[#D4AF37] p-8 md:p-16 rounded-[40px] relative overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)]"
      >
        <div className="absolute top-0 right-0 bg-[#D4AF37] text-black px-10 py-2 font-black uppercase tracking-widest rotate-45 translate-x-10 translate-y-6">
          Best Value
        </div>

        <h3 className="text-3xl font-bold mb-2">Yearly Elite Membership</h3>
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-7xl font-black text-[#D4AF37]">₹8,000</span>
          <span className="text-xl text-gray-500 font-bold">/ YEAR</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
          <div className="space-y-4">
            <li className="flex gap-3 items-center text-gray-300"><CheckCircle className="text-[#D4AF37]" /> Personal Trainer Included</li>
            <li className="flex gap-3 items-center text-gray-300"><CheckCircle className="text-[#D4AF37]" /> Luxury Steam Bath Access</li>
            <li className="flex gap-3 items-center text-gray-300"><CheckCircle className="text-[#D4AF37]" /> Premium Sauna Sessions</li>
          </div>
          <div className="space-y-4">
            <li className="flex gap-3 items-center text-gray-300"><CheckCircle className="text-[#D4AF37]" /> Professional Massage Therapy</li>
            <li className="flex gap-3 items-center text-gray-300"><CheckCircle className="text-[#D4AF37]" /> 24/7 Gym Floor Access</li>
            <li className="flex gap-3 items-center text-[#D4AF37] font-bold italic">
              <Package size={24} /> FREE PREMIUM GYM BAG
            </li>
          </div>
        </div>

        <button className="w-full md:w-auto px-16 py-5 bg-[#D4AF37] text-black font-black rounded-full text-xl hover:scale-105 transition-transform">
          SECURE YOUR SPOT
        </button>
      </motion.div>
    </div>
  </section>
);

export default Pricing;