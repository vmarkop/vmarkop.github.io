import React, { useState } from 'react';
import FindMyLocation from '../FindMyLocation/FindMyLocation';
import Location from '../Location/Location';
import Settings, { type SettingsState } from '../Settings/Settings';
import { WeatherCard } from '../Weather/WeatherCard';

const Projects: React.FC = () => {
  const [settings, setSettings] = useState<SettingsState>({
    units: 'metric',
    defaultCity: 'Athens',
    animations: true,
  });

  const [city, setCity] = useState<string>('');

  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="card">
        <div
          className="locationPicker"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          <Location onCityChange={setCity} />
          <span style={{ whiteSpace: 'nowrap', marginBottom: '24px' }}>OR</span>
          <FindMyLocation onCityChange={setCity} />
        </div>
        <WeatherCard city={city} settings={settings} />
        {/* <Settings onSettingsChange={setSettings} /> */}
      </div>
    </section>
  );
};

export default Projects;
