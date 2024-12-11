import { useState, useEffect } from 'react';

interface Fan {
  name: string;
  variations: string[];
  related: string[];
}

export function useFanData() {
  const [fanData, setFanData] = useState<Fan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('/fans.json')
      .then((response) => response.json())
      .then((data) => {
        setFanData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { fanData, loading, error };
}