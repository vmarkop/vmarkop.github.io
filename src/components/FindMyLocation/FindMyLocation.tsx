import React, { useState } from 'react';

interface FindMyLocationProps {
  onCityChange?: (city: string) => void;
}

const GEOAPIFY_API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

const FindMyLocation: React.FC<FindMyLocationProps> = ({ onCityChange }) => {
  const [city, setCity] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setError(null);
    setCity(null);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${GEOAPIFY_API_KEY}`;
          const res = await fetch(url);
          if (!res.ok) throw new Error('Reverse geocoding failed');
          const data = await res.json();

          const props = data.features?.[0]?.properties;
          const closestCity =
            props?.city ||
            props?.town ||
            props?.village ||
            props?.hamlet ||
            props?.state ||
            props?.country ||
            null;

          setCity(closestCity);
          if (closestCity && onCityChange) onCityChange(closestCity);
        } catch (err: unknown) {
          console.error(err);
          setError('Could not get your city.');
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError('Could not get your location.');
        setLoading(false);
      },
    );
  };

  return (
    <div style={{ color: 'red', marginBottom: '24px' }}>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Finding...' : 'Find my location'}
      </button>
      {city && (
        <div>
          Your closest city: <strong>{city}</strong>
        </div>
      )}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default FindMyLocation;
