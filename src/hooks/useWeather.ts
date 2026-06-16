import { useState } from "react";
import { getCoordinates, getWeather } from "../services/weatherService";
import type { WeatherData } from "../types/weather";
export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [locationName, setLocationName] = useState("");
  const [country, setCountry] = useState("");

  const search = async (city: string) => {
    setLoading(true);
    setError("");

    try {
      const location = await getCoordinates(city);

      setLocationName(location.name);
      setCountry(location.country);

      const weatherData = await getWeather(
        location.latitude,
        location.longitude,
      );

      setWeather(weatherData);

      return location;
    } catch {
      setError("City not found");
      setWeather(null);
      setLocationName("");
      setCountry("");

      return null;
    } finally {
      setLoading(false);
    }
  };
  return { search, weather, loading, error, locationName, country };
}
