import React from 'react';
import Spline from '@splinetool/react-spline';
import { Ticket, QrCode, PlayCircle } from 'lucide-react';

const ACCENT = '#FF3B3B';

const HeroSpline = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[88vh] overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/XuAg4PYWfzmy0iW1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient to improve text contrast; does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 flex flex-col items-start">
        <span className="inline-flex items-center gap-2 text-sm md:text-base" style={{ color: ACCENT }}>
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 backdrop-blur">
            <PlayCircle className="h-4 w-4" />
            Futuristic Cinema Experience
          </span>
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Book Tickets, Pick Seats, Order Food
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF3B3B] to-rose-400">to Your Seat</span>
        </h1>
        <p className="mt-4 md:mt-6 max-w-2xl text-base md:text-lg text-gray-200">
          Scan your seat’s QR code to order snacks instantly. Real-time tracking,
          secure checkout, and a seamless movie night — all in one place.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#movies"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold shadow-lg transition"
            style={{ backgroundColor: ACCENT, color: '#0B0B0B', boxShadow: '0 10px 25px rgba(255,59,59,0.25)' }}>
            <Ticket className="h-5 w-5" />
            Book Tickets
          </a>
          <a
            href="#qr"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold border border-white/20 hover:border-white/40 bg-white/5 backdrop-blur">
            <QrCode className="h-5 w-5" />
            Scan Seat QR
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSpline;
