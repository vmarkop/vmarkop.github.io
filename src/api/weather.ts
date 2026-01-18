import type { OpenWeatherMapResponse } from '../types/OpenWeatherMapResponse';

export const getWeather = async (
  city: string = 'Lamia',
  units: 'metric' | 'imperial' = 'metric',
): Promise<OpenWeatherMapResponse> => {
  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
  if (!apiKey) {
    throw new Error('VITE_OPENWEATHERMAP_API_KEY is not defined in the environment variables.');
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
