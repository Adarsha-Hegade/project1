import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { FanGrid } from '../FanGrid/FanGrid';
import { useFanData } from '../../hooks/useFanData';

export function CategoryView() {
  const { category } = useParams<{ category: string }>();
  const { fanData, loading, error } = useFanData();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return <Navigate to="/" replace />;
  }

  const categoryFans = fanData.filter(fan => fan.category === category);
  
  if (categoryFans.length === 0) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold text-white">{category}</h1>
        <FanGrid fans={categoryFans} />
      </div>
    </div>
  );
}