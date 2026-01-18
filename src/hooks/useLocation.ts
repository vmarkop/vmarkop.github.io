// src/api/geocode.ts

export async function geocode(query: string) {
  const key = import.meta.env.VITE_OPENCAGE_API_KEY;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(query)}&key=${key}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch geocode data');

  const data = await res.json();
  return data; // full OpenCage API response
}
