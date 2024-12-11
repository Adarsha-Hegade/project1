import React, { useState } from 'react';
import { ChevronUp, Maximize, Minimize } from 'lucide-react';
import { useParams, Navigate } from 'react-router-dom';
import { Toolbar } from '../Toolbar/Toolbar';
import { ImageViewer } from './ImageViewer';
import { CameraView } from '../Camera/CameraView';
import { useFanData } from '../../hooks/useFanData';
import { useFullscreen } from '../../hooks/useFullscreen';

export function SceneViewer() {
  const { fanName } = useParams<{ fanName: string }>();
  const [isToolbarOpen, setIsToolbarOpen] = useState(false);
  const [cameraError, setCameraError] = useState<Error | null>(null);
  const { fanData, loading } = useFanData();
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  if (loading) return null;

  const fanExists = fanData?.some(fan => fan.name === fanName);
  if (!fanExists) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {!cameraError && <CameraView onError={setCameraError} />}
      <ImageViewer fanName={fanName || 'dual'} />
      
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={toggleFullscreen}
          className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
        >
          {isFullscreen ? (
            <Minimize className="h-6 w-6 text-white" />
          ) : (
            <Maximize className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      <button
        onClick={() => setIsToolbarOpen(!isToolbarOpen)}
        className={`fixed bottom-4 right-4 z-50 rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20 ${
          isToolbarOpen ? 'rotate-180' : ''
        }`}
      >
        <ChevronUp className="h-6 w-6 text-white" />
      </button>

      <Toolbar isOpen={isToolbarOpen} currentFan={fanName || 'dual'} />
    </div>
  );
}