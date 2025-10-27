import React from 'react';
import HeroSpline from './components/HeroSpline';
import MovieShowcase from './components/MovieShowcase';
import SeatAndFoodPreview from './components/SeatAndFoodPreview';
import AdminHighlights from './components/AdminHighlights';

const ACCENT = '#FF3B3B';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-[#FF3B3B] to-rose-400" />
            <span className="text-white font-semibold tracking-tight">CineSeat</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#movies" className="hover:text-white">Movies</a>
            <a href="#" className="hover:text-white">My Tickets</a>
            <a href="#qr" className="hover:text-white">Orders</a>
          </nav>
          <button
            className="text-sm font-semibold px-3 py-1.5 rounded-lg"
            style={{ backgroundColor: ACCENT, color: '#0B0B0B' }}
          >
            Sign In
          </button>
        </div>
      </header>

      <main>
        <HeroSpline />
        <MovieShowcase />
        <SeatAndFoodPreview />
        <AdminHighlights />
      </main>

      <footer className="border-t border-white/10 bg-[#0A0A0A] text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm">
          <p>
            © {new Date().getFullYear()} CineSeat — A modern, cinema-dark experience. Book, sit, and enjoy.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
