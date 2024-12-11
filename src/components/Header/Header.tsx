import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFanData } from '../../hooks/useFanData';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { fanData } = useFanData();
  const categories = [...new Set(fanData.map(fan => fan.category))];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-white">
          FanViewer
        </Link>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-gray-300 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-black/80 backdrop-blur-lg">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <Link 
              to="/" 
              className="block py-2 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/category/${category}`}
                  className="py-2 px-4 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}