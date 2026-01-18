import React, { useEffect, useState } from 'react';

export interface SettingsState {
  units: 'metric' | 'imperial';
  defaultCity: string;
  animations: boolean;
}

interface SettingsProps {
  onSettingsChange?: (settings: SettingsState) => void;
}

const Settings: React.FC<SettingsProps> = ({ onSettingsChange }) => {
  const [settings, setSettings] = useState<SettingsState>({
    units: 'metric',
    defaultCity: 'Athens',
    animations: true,
  });

  useEffect(() => {
    if (onSettingsChange) {
      onSettingsChange(settings);
    }
  }, [settings, onSettingsChange]);

  const handleUnitsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings((prev) => ({ ...prev, units: e.target.value as 'metric' | 'imperial' }));
  };

  const handleDefaultCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings((prev) => ({ ...prev, defaultCity: e.target.value }));
  };

  const handleAnimationsToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings((prev) => ({ ...prev, animations: e.target.checked }));
  };

  return (
    <div style={{ padding: 24, borderRadius: 12, maxWidth: 400 }}>
      <h2>Settings</h2>
      <div style={{ marginBottom: 16 }}>
        <label>
          Units:{' '}
          <select value={settings.units} onChange={handleUnitsChange}>
            <option value="metric">Metric (°C, m/s)</option>
            <option value="imperial">Imperial (°F, mph)</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>
          Default City:{' '}
          <input
            type="text"
            value={settings.defaultCity}
            onChange={handleDefaultCityChange}
            placeholder="Enter default city"
          />
        </label>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>
          <input type="checkbox" checked={settings.animations} onChange={handleAnimationsToggle} />{' '}
          Enable animations
        </label>
      </div>
      <div style={{ marginTop: 24, fontSize: '0.9em', color: '#666' }}>
        <strong>Preview:</strong>
        <pre>{JSON.stringify(settings, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Settings;
