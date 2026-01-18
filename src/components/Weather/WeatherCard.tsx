import React, { useEffect, useState } from 'react';
import './WeatherCard.css'; // Ensure you have the correct CSS file for styling
import { getWeather } from '../../api/weather';
import type { OpenWeatherMapResponse } from '../../types/OpenWeatherMapResponse';
import type { SettingsState } from '../../types/Settings';
import { unitsToTemperatureUnit } from '../../utils/units';

type TemperatureUnit = 'C' | 'F' | 'K';

interface WeatherService {
  getWeather: (city: string) => Promise<OpenWeatherMapResponse>;
}

const weatherService: WeatherService = {
  getWeather: async (city: string) => {
    return await getWeather(city);
  },
};

interface WeatherCardProps {
  city?: string;
  settings: SettingsState;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ city, settings }: WeatherCardProps) => {
  const [weather, setWeather] = useState<OpenWeatherMapResponse | null>(null);
  const [date, setDate] = useState<Date>(new Date());
  const [temperatureUnit] = unitsToTemperatureUnit(settings.units) as TemperatureUnit;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getWeather(city || 'Lamia');
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerId);
  }, [city]);

  const getWeather = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await weatherService.getWeather(city || 'Lamia');
      setWeather(data);
    } catch (err) {
      console.error(err);
      setError('Could not fetch weather data.');
    } finally {
      setLoading(false);
    }
  };

  const isLightOutside = (data: OpenWeatherMapResponse) => {
    const now = Math.floor(Date.now() / 1000);
    return data.sys.sunrise < now && data.sys.sunset > now;
  };

  //   const getTempInUnit = (temp: number, unit: TemperatureUnit) => {
  //     switch (unit) {
  //       case 'C':
  //         return temp;
  //       case 'F':
  //         return (temp * 9) / 5 + 32;
  //       case 'K':
  //         return temp + 273.15;
  //       default:
  //         return temp;
  //     }
  //   };

  const getTempInUnitString = (temp: number, unit: string) => {
    switch (unit) {
      case 'C':
        return temp;
      case 'F':
        return (temp * 9) / 5 + 32;
      case 'K':
        return temp + 273.15;
      default:
        return temp;
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!weather) return null;

  return (
    <div className={`weather-card-background ${isLightOutside(weather) ? 'sunny' : 'night'}`}>
      <div className="weather-card-inner small-cloudy">
        <div className="weather-card-half">
          <div className="citybox desktop">
            <p className="city">{weather.name}</p>
          </div>
          <div className="weatherbox">
            <p className="weather">{weather.weather[0].description}</p>
            <p className="temperature">
              {getTempInUnitString(weather.main.temp, temperatureUnit).toFixed(0)}°{temperatureUnit}
            </p>
          </div>
        </div>
        <div className="weather-card-half">
          <div className="citybox mobile">
            <p className="city">{weather.name}</p>
          </div>
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <div className="timebox">
            <p className="date">
              {date.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
