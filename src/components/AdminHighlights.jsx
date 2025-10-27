import React from 'react';
import { ShieldCheck, QrCode, BarChart3, Users } from 'lucide-react';

const ACCENT = '#FF3B3B';

const features = [
  {
    icon: QrCode,
    title: 'Seat QR Generator',
    desc: 'Create unique QR codes for every seat and showtime in seconds.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Track ticket sales, food revenue, and seat occupancy at a glance.',
  },
  {
    icon: Users,
    title: 'Staff Management',
    desc: 'Assign roles, manage orders, and coordinate deliveries in real time.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    desc: 'Razorpay/Stripe checkout with instant e-ticket and QR confirmation.',
  },
];

const AdminHighlights = () => {
  return (
    <section className="bg-[#0A0A0A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Admin & Operations</h2>
            <p className="text-gray-300 mt-1">Tools to run your cinema like a pro</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="h-11 w-11 rounded-lg grid place-items-center border" style={{ backgroundColor: 'rgba(255,59,59,0.15)', borderColor: 'rgba(255,59,59,0.25)', color: ACCENT }}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-1 text-sm text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminHighlights;
