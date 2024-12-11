import React from 'react';
import { useFanData } from '../../hooks/useFanData';
import { FanCard } from './FanCard';

interface ToolbarProps {
  isOpen: boolean;
  currentFan: string;
}

export function Toolbar({ isOpen, currentFan }: ToolbarProps) {
  const { fanData, loading, error } = useFanData();
  const currentFanData = fanData?.find((fan) => fan.name === currentFan);

  if (loading || error || !currentFanData) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 transform bg-black/80 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-white">Related Models</h2>
        </div>
        <div className="hide-scrollbar w-100 h-100 flex gap-4 overflow-x-auto pb-4">
          {currentFanData.related.map((fanName) => (
            <FanCard key={fanName} fanName={fanName} />
          ))}
        </div>
        {currentFanData.variations.length > 0 && (
          <>
            <div className="mb-4 mt-6">
              <h2 className="text-xl font-semibold text-white">Variations</h2>
            </div>
            <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-4">
              {currentFanData.variations.map((variation) => (
                <FanCard key={variation} fanName={variation} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}