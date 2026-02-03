import { motion } from 'framer-motion';
import { Waves, Thermometer, UserCheck, Flower2, Zap, HeartPulse } from 'lucide-react';

const services = [
  {
    title: "Personal Training",
    desc: "Our elite trainers create custom blueprints for your body. Whether it's fat loss or muscle hypertrophy, we track every rep to ensure you hit your peak.",
    icon: <UserCheck size={40} className="text-[#D4AF37]" />,
  },
  {
    title: "Steam Bath",
    desc: "Experience ultimate post-workout recovery. Our steam rooms help in deep skin detoxification, improving respiratory health and soothing sore muscles.",
    icon: <Waves size={40} className="text-[#D4AF37]" />,
  },
  {
    title: "Infrared Sauna",
    desc: "Step into our high-end sauna to improve circulation and heart health. Perfect for flushing out toxins and reaching a state of total mental clarity.",
    icon: <Thermometer size={40} className="text-[#D4AF37]" />,
  },
  {
    title: "Sports Massage",
    desc: "Recovery is where the growth happens. Our professional massage therapy targets deep tissue to prevent injuries and accelerate muscle repair.",
    icon: <Flower2 size={40} className="text-[#D4AF37]" />,
  },
  {
    title: "Modern Equipment",
    desc: "Train with the latest biomechanically efficient machines. From Olympic lifting platforms to advanced cardio tech, we have it all in Karanjade.",
    icon: <Zap size={40} className="text-[#D4AF37]" />,
  },
  {
    title: "Cardio Zone",
    desc: "Boost your endurance in our dedicated cardio suite featuring high-end treadmills and ellipticals designed to minimize joint impact while maximizing burn.",
    icon: <HeartPulse size={40} className="text-[#D4AF37]" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => (
  <section id="services" className="py-32 bg-[#0A0A0A] px-6">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#D4AF37] font-bold tracking-[0.3em] text-sm uppercase block mb-4"
        >
          World Class Amenities
        </motion.span>
        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
          BEYOND THE <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white">
            WEIGHT ROOM
          </span>
        </h2>
      </div>

      {/* Services Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="group p-10 rounded-[32px] bg-[#111] border border-gray-900 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-2xl"
          >
            <div className="mb-8 p-4 inline-block rounded-2xl bg-black group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-500">
              {service.icon}
            </div>
            <h4 className="text-2xl font-bold text-white mb-5">{service.title}</h4>
            <p className="text-gray-500 leading-relaxed font-light">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Feature Callout to add more length */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="mt-24 p-12 rounded-[40px] bg-gradient-to-br from-[#111] to-black border border-gray-800 text-center"
      >
        <h3 className="text-3xl font-bold mb-4 italic text-[#D4AF37]">"The best fitness experience in Navi Mumbai."</h3>
        <p className="text-gray-400">— Join 200+ members at Sector 2, Karanjade</p>
      </motion.div>
    </div>
  </section>
);

export default Services;