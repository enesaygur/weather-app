import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import { getCoordinates, getWeather } from "./services/weatherService";
import WeatherCard from "./components/WeatherCard";
import type { WeatherData } from "./types/weather";
import ForecastCard from "./components/ForecastCard";
import LocationCard from "./components/LocationCard";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import SearchHistory from "./components/SearchHistory";

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [locationName, setLocationName] = useState("");
  const [country, setCountry] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem("searchHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError("");
    try {
      const location = await getCoordinates(city);
      setSearchHistory((prev) => {
        const filtered = prev.filter((item) => item !== location.name);
        return [location.name, ...filtered].slice(0, 5) ;
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
  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);
  return (
    <>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {searchHistory.length > 0 && <SearchHistory history={searchHistory} />}
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
