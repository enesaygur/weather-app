import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import LocationCard from "./components/LocationCard";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import CityList from "./components/CityList";
import { useWeather } from "./hooks/useWeather";

function App() {
  const { weather, loading, error, locationName, country, search } =
    useWeather();

  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem("searchHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    const faved = localStorage.getItem("favorites");
    return faved ? JSON.parse(faved) : [];
  });

  const handleSearch = async (city: string) => {
    const location = await search(city);
    if (!location) return;

    setSearchHistory((prev) => {
      const filtered = prev.filter((item) => item !== location.name);
      return [location.name, ...filtered].slice(0, 5);
    });
  };
  const addFavorite = (city: string) => {
    setFavorites((prev) => {
      if (prev.includes(city)) return prev;
      return [city, ...prev];
    });
  };

  const removeFavorite = (city: string) => {
    setFavorites((prev) => prev.filter((item) => item !== city));
  };

  const removeFromHistory = (city: string) => {
    setSearchHistory((prev) => prev.filter((item) => item !== city));
  };

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {searchHistory.length > 0 && (
        <CityList
          title="Recent Searches"
          items={searchHistory}
          onSelect={handleSearch}
          onRemove={removeFromHistory}
        />
      )}
      {favorites.length > 0 && (
        <CityList
          title="Favorite Cities"
          items={favorites}
          onSelect={handleSearch}
          onRemove={removeFavorite}
        />
      )}
      {locationName && (
        <LocationCard locationName={locationName} country={country} />
      )}
      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {weather && (
        <>
          <WeatherCard
            weather={weather}
            locationName={locationName}
            onFavorite={addFavorite}
          />
          <ForecastCard weather={weather} />
        </>
      )}
    </>
  );
}
export default App;
