import React from 'react';
import { Popcorn, QrCode, Check, X } from 'lucide-react';

const seats = Array.from({ length: 6 }).map((_, row) =>
  Array.from({ length: 10 }).map((_, col) => ({
    id: `${String.fromCharCode(65 + row)}${col + 1}`,
    status: Math.random() < 0.2 ? 'booked' : 'available',
  }))
);

const SeatLegend = () => (
  <div className="flex items-center gap-4 text-sm">
    <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-white/10 border border-white/20"></span>Available</div>
    <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-[#00FF84]"></span>Selected</div>
    <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-white/20 line-through"></span>Booked</div>
  </div>
);

const FoodItem = ({ name, price }) => (
  <div className="flex items-center justify-between py-2">
    <div>
      <p className="text-sm text-white">{name}</p>
      <p className="text-xs text-gray-400">₹{price}</p>
    </div>
    <div className="flex items-center gap-2">
      <button className="h-8 w-8 grid place-items-center rounded-md bg-white/10 text-white"><X className="h-4 w-4" /></button>
      <button className="h-8 w-8 grid place-items-center rounded-md bg-[#00FF84] text-black font-bold">+</button>
    </div>
  </div>
);

const SeatAndFoodPreview = () => {
  return (
    <section className="bg-[#0A0A0A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Pick Your Seats</h3>
            <SeatLegend />
          </div>
          <div className="mt-6 w-full overflow-x-auto">
            <div className="inline-block">
              {seats.map((row, rIdx) => (
                <div key={rIdx} className="flex items-center gap-2 mb-2">
                  <span className="w-6 text-sm text-gray-400">{String.fromCharCode(65 + rIdx)}</span>
                  <div className="flex gap-2">
                    {row.map((seat) => (
                      <div
                        key={seat.id}
                        className={`w-8 h-8 rounded grid place-items-center text-[10px] ${
                          seat.status === 'booked'
                            ? 'bg-white/20 text-gray-400 line-through'
                            : 'bg-white/10 text-white border border-white/20 hover:border-[#00FF84]/60'
                        }`}
                      >
                        {seat.id.replace(/[A-Z]/g, '')}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">Screen this way</div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold flex items-center gap-2"><Popcorn className="h-5 w-5 text-[#00FF84]"/> Order to Your Seat</h3>
              <span className="text-xs text-gray-300 inline-flex items-center gap-1 bg-white/10 px-2 py-1 rounded"><QrCode className="h-3.5 w-3.5"/> A12</span>
            </div>
            <div className="mt-4 divide-y divide-white/10">
              <FoodItem name="Salted Popcorn" price={150} />
              <FoodItem name="Cheese Nachos" price={220} />
              <FoodItem name="Cold Coffee" price={180} />
            </div>
            <button className="mt-5 w-full bg-[#00FF84] hover:bg-teal-300 text-black font-semibold py-2.5 rounded-lg">
              Add to Cart
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h4 className="font-semibold">Live Order Status</h4>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[#00FF84]"/> Preparing</div>
              <div className="flex items-center gap-2 opacity-70"><Check className="h-4 w-4 text-gray-400"/> Delivering</div>
              <div className="flex items-center gap-2 opacity-50"><Check className="h-4 w-4 text-gray-400"/> Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeatAndFoodPreview;
