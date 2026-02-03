import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Contact = () => (
  <section className="py-24 bg-[#0A0A0A] border-t border-gray-900 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl font-black mb-8">VISIT THE <span className="text-[#D4AF37]">HQ</span></h2>
        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <div className="bg-[#111] p-4 rounded-2xl border border-gray-800">
              <MapPin className="text-[#D4AF37]" size={32} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">Our Location</h4>
              <p className="text-gray-500">Sector 2, Karanjade, Navi Mumbai</p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="bg-[#111] p-4 rounded-2xl border border-gray-800">
              <Phone className="text-[#D4AF37]" size={32} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">Call Us</h4>
              <p className="text-gray-500">+91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[400px] bg-[#111] rounded-[30px] border border-gray-800 overflow-hidden relative">
        {/* Mock Map Background */}
        <div className="absolute inset-0 bg-[url('https://api.maptiler.com/maps/toner/static/auto/800x400.png?key=get_your_own_key')] bg-cover grayscale opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#D4AF37] text-black px-6 py-2 rounded-full font-black animate-bounce">
            TUSHAR FITNESS IS HERE
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;