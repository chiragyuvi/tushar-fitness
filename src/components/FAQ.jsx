import { motion } from 'framer-motion';

const faqs = [
  { q: "What are the gym timings?", a: "We are open 24/7 for our Elite members at Sector 2, Karanjade." },
  { q: "Is the trainer really included in ₹8,000?", a: "Yes, general trainer assistance and a personalized workout plan are included in your yearly fee." },
  { q: "How do I get my free gym bag?", a: "Once you secure your yearly spot online or at the desk, your premium bag is handed over instantly." },
  { q: "Are Steam and Sauna sessions limited?", a: "No, Elite members have unlimited access to recovery facilities." }
];

const FAQ = () => (
  <section className="py-24 bg-black px-6">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-black mb-12 text-center">FREQUENTLY ASKED <span className="text-[#D4AF37]">QUESTIONS</span></h2>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <motion.div key={i} className="p-6 bg-[#111] rounded-2xl border border-gray-900">
            <h4 className="text-[#D4AF37] font-bold mb-2">{faq.q}</h4>
            <p className="text-gray-500">{faq.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;