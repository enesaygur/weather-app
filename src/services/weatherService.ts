const BASE_URL = "https://api.open-meteo.com/v1/forecast";
const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";

export async function getCoordinates(city: string) {
  const res = await fetch(`${GEO_URL}?name=${city}&count=1`);

  if (!res.ok) {
    throw new Error("City not found");
  }

  const data = await res.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }

  const { latitude, longitude, name, country } = data.results[0];

  return { latitude, longitude, name, country };
}

export async function getWeather(lat: number, lon: number) {
  const res = await fetch(
    `${BASE_URL}?latitude=${lat}&longitude=${lon}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`,
  );

  if (!res.ok) {
    throw new Error("Weather data not found");
  }

  return await res.json();
}
