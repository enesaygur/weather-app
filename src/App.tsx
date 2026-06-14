import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { getCoordinates, getWeather } from "./services/weatherService";
import WeatherCard from "./components/WeatherCard";
import type { WeatherData } from "./types/weather";
import ForecastCard from "./components/ForecastCard";
import LocationCard from "./components/LocationCard";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [locationName, setLocationName] = useState("");
  const [country, setCountry] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError("");
    try {
      const location = await getCoordinates(city);
      setSearchHistory((prev) => {
        if (prev.includes(location.name)) return prev;
        return [location.name, ...prev];
      });

      setLocationName(location.name);
      setCountry(location.country);

      const weatherData = await getWeather(
        location.latitude,
        location.longitude,
      );

      setWeather(weatherData);
    } catch (err) {
      setError("City not found");
      setWeather(null);
      setLocationName("");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {searchHistory.length > 0 && (
        <div>
          <h2>Recent Searches</h2>
          {searchHistory.map((city) => (
            <p key={city}>{city}</p>
          ))}
        </div>
      )}
      {locationName && (
        <LocationCard locationName={locationName} country={country} />
      )}
      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
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
