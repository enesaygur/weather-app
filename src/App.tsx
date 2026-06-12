import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { getCoordinates, getWeather } from "./services/weatherService";
import WeatherCard from "./components/WeatherCard";
import type { WeatherData } from "./types/weather";
import ForecastCard from "./components/ForecastCard";
import LocationCard from "./components/LocationCard";

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [locationName, setLocationName] = useState("");
  const [country, setCountry] = useState("");

  const handleSearch = async (city: string) => {
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
    } catch (err) {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {locationName && (
        <LocationCard locationName={locationName} country={country} />
      )}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && (
        <>
          <WeatherCard weather={weather} />
          <ForecastCard weather={weather} />
        </>
      )}
    </>
  );
}

export default App;
