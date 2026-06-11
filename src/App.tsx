import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { getCoordinates, getWeather } from "./services/weatherService";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError("");
    try {
      const location = await getCoordinates(city);
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
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </>
  );
}

export default App;
