// src/types/OpenWeatherMapResponse.d.ts

export interface OpenWeatherMapWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface OpenWeatherMapMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface OpenWeatherMapWind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface OpenWeatherMapClouds {
  all: number;
}

export interface OpenWeatherMapSys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface OpenWeatherMapCoord {
  lon: number;
  lat: number;
}

export interface OpenWeatherMapResponse {
  coord: OpenWeatherMapCoord;
  weather: OpenWeatherMapWeather[];
  base: string;
  main: OpenWeatherMapMain;
  visibility: number;
  wind: OpenWeatherMapWind;
  clouds: OpenWeatherMapClouds;
  dt: number;
  sys: OpenWeatherMapSys;
  timezone: number; // Shift in seconds from UTC
  id: number;
  name: string;
  cod: number;
}
