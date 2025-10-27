import React from 'react';
import { Film, Clock, PlayCircle, SlidersHorizontal } from 'lucide-react';

const ACCENT = '#FF3B3B';

const movies = [
  {
    id: 1,
    title: 'Neon Horizons',
    language: 'English',
    duration: '2h 10m',
    poster:
      'https://images.unsplash.com/photo-1502139214985-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop',
    showtimes: ['2:30 PM', '6:45 PM', '9:30 PM'],
  },
  {
    id: 2,
    title: 'Galactic Echo',
    language: 'Hindi',
    duration: '2h 02m',
    poster:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop',
    showtimes: ['1:15 PM', '5:00 PM', '8:15 PM'],
  },
  {
    id: 3,
    title: 'Silent Pulse',
    language: 'Tamil',
    duration: '1h 54m',
    poster:
      'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop',
    showtimes: ['11:00 AM', '3:40 PM', '10:00 PM'],
  },
];

const MovieCard = ({ movie }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition">
    <div className="aspect-[16/10] bg-black/40">
      <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-white font-semibold text-lg">{movie.title}</h3>
          <div className="mt-1 flex items-center gap-2 text-xs text-gray-300">
            <span className="inline-flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full">
              <Film className="h-3.5 w-3.5" /> {movie.language}
            </span>
            <span className="inline-flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full">
              <Clock className="h-3.5 w-3.5" /> {movie.duration}
            </span>
          </div>
        </div>
        <button className="inline-flex items-center gap-2" style={{ color: ACCENT }}>
          <PlayCircle className="h-5 w-5" />
          Trailer
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {movie.showtimes.map((t) => (
          <button
            key={t}
            className="text-sm bg-white/10 hover:bg-white/20 text-white rounded-md px-3 py-1"
          >
            {t}
          </button>
        ))}
      </div>

      <button
        className="mt-4 w-full text-black font-semibold py-2.5 rounded-lg hover:opacity-95"
        style={{ backgroundColor: ACCENT }}
      >
        Choose Seats
      </button>
    </div>
  </div>
);

const MovieShowcase = () => {
  return (
    <section id="movies" className="bg-[#0A0A0A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Now Showing</h2>
            <p className="text-gray-300 mt-1">Pick your movie, language, and showtime</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
              <SlidersHorizontal className="h-4 w-4 text-gray-300" />
              <select className="bg-transparent text-sm focus:outline-none">
                <option>All Languages</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Tamil</option>
              </select>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
              <Clock className="h-4 w-4 text-gray-300" />
              <select className="bg-transparent text-sm focus:outline-none">
                <option>Today</option>
                <option>Tomorrow</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieShowcase;
