import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-32 bg-[#0A0A0A] border-t border-gray-900 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#D4AF37] font-bold tracking-[0.3em] text-sm uppercase mb-4">Location</h2>
            <h3 className="text-5xl md:text-6xl font-black text-white mb-6">VISIT THE <br/>CLUB</h3>
            <p className="text-gray-500 max-w-md text-lg font-light">
              Premium fitness is now in your neighborhood. Find us at the most accessible spot in Karanjade.
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="flex gap-6 items-center p-8 bg-[#111] rounded-[32px] border border-gray-800">
              <div className="text-[#D4AF37] bg-black p-4 rounded-2xl">
                <MapPin size={32} />
              </div>
              <div>
                <h4 className="font-bold text-white text-xl">Our Address</h4>
                <p className="text-gray-500">Sector 2, Karanjade, Panvel, Navi Mumbai</p>
              </div>
            </div>

            <div className="flex gap-6 items-center p-8 bg-[#111] rounded-[32px] border border-gray-800">
              <div className="text-[#D4AF37] bg-black p-4 rounded-2xl">
                <Clock size={32} />
              </div>
              <div>
                <h4 className="font-bold text-white text-xl">Gym Hours</h4>
                <p className="text-gray-500">Open 24/7 • 365 Days</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Map Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="h-[600px] w-full rounded-[40px] overflow-hidden border-2 border-gray-800 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl shadow-[#D4AF37]/5"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.645558444455!2d73.10271177501464!3d18.991206182194726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e96b3a0337b5%3A0xc6c766786a34a8c!2sSector%202%2C%20Karanjade%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
          ></iframe>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;