const Pricing = () => (
  <section id="plans" className="py-20 bg-black text-white px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 text-gold">CHOOSE YOUR PLAN</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card p-10 rounded-2xl border border-gray-800">
          <h3 className="text-2xl font-bold mb-4">Monthly Basic</h3>
          <p className="text-4xl font-black mb-6">₹8,000 <span className="text-sm text-gray-400">/month</span></p>
          <ul className="text-gray-400 space-y-3 mb-8 text-left">
            <li>✓ All Gym Equipments</li>
            <li>✓ Locker Room Access</li>
            <li>✓ Trainer Support</li>
          </ul>
          <button className="w-full py-3 bg-gray-800 rounded-lg font-bold">Get Started</button>
        </div>

        <div className="bg-gold p-10 rounded-2xl text-black relative transform scale-105">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full text-xs font-bold uppercase">Best Value</div>
          <h3 className="text-2xl font-bold mb-4">Yearly Elite</h3>
          <p className="text-4xl font-black mb-6">₹75,000 <span className="text-sm font-medium">/year</span></p>
          <ul className="font-medium space-y-3 mb-8 text-left">
            <li>✓ Steam, Sauna & Massage</li>
            <li>✓ Dedicated Personal Trainer</li>
            <li className="font-bold underline italic">★ FREE PREMIUM GYM BAG</li>
          </ul>
          <button className="w-full py-3 bg-black text-white rounded-lg font-bold">Claim Now</button>
        </div>
      </div>
    </div>
  </section>
);
export default Pricing;