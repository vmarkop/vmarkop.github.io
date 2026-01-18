import React, { useState } from 'react';

interface LocationProps {
  onCityChange?: (city: string) => void;
}

const Location: React.FC<LocationProps> = ({ onCityChange }) => {
  const [input, setInput] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const city = input.trim();
    if (city) {
      onCityChange?.(city);
      setInput(''); // Optional: clear input after submit
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', gap: 8, marginBottom: 24, width: '50%' }}
    >
      <input
        type="text"
        placeholder="Enter a city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          flex: 1,
          padding: '8px',
          borderRadius: '6px',
          border: '1px solid #ddd',
        }}
      />
      <button type="submit" style={{ borderRadius: '6px', padding: '8px' }}>
        Set
      </button>
    </form>
  );
};

export default Location;
