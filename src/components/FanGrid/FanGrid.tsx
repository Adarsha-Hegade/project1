import React from 'react';
import { Link } from 'react-router-dom';
import { Fan } from 'lucide-react';
import { FanData } from '../../types/fan';

interface FanGridProps {
  fans: FanData[];
}

export function FanGrid({ fans }: FanGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {fans.map((fan) => (
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
                    <Fan class="h-12 w-12 text-white/50" />
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
  );
}