import React from 'react';
import { Link } from 'react-router-dom';
import { useFanData } from '../../hooks/useFanData';
import { Fan } from 'lucide-react';

export function Home() {
  const { fanData, loading, error } = useFanData();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-white">
        <p>Error loading fans data</p>
      </div>
    );
  }

  const categories = [...new Set(fanData.map(fan => fan.category))];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-white">{category}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {fanData
                .filter(fan => fan.category === category)
                .map((fan) => (
                  <Link
                    key={fan.name}
                    to={`/${fan.name}`}
                    className="group overflow-hidden rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-800">
                      <img
                        src={`/images/${fan.name}.png`}
                        alt={fan.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="flex h-full items-center justify-center">
                              <svg class="h-12 w-12 text-white/50">
                                <use href="#fan-icon" />
                              </svg>
                            </div>
                          `;
                        }}
                      />
                    </div>
                    <h3 className="mt-4 text-center text-lg font-medium capitalize text-white">
                      {fan.name.replace(/-/g, ' ')}
                    </h3>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}