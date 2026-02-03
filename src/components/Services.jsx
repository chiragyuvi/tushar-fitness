import { motion } from 'framer-motion';
const services = [
  { title: "Personal Trainer", desc: "Expert guidance for your goals." },
  { title: "Steam Bath", desc: "Relax and detoxify after a heavy set." },
  { title: "Sauna", desc: "Premium heat therapy for recovery." },
  { title: "Massage", desc: "Professional sports massage therapy." },
];

const Services = () => (
  <section id="services" className="py-20 bg-darkest text-white px-6">
    <h2 className="text-4xl font-bold text-center mb-16">PREMIUM <span className="text-gold">AMENITIES</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {services.map((s, i) => (
        <motion.div 
          whileHover={{ y: -10 }}
          key={i} 
          className="bg-card p-8 rounded-xl border border-gray-800 hover:border-gold transition-colors"
        >
          <h3 className="text-xl font-bold mb-3">{s.title}</h3>
          <p className="text-gray-500">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
export default Services;