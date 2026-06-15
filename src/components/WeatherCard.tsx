import { getWeatherIcon } from "../utils/weatherIcons";
import type { WeatherData } from "./../types/weather";
interface Props {
  weather: WeatherData;
  locationName: string;
  onFavorite: (city: string) => void;
}
function WeatherCard({ weather, locationName, onFavorite }: Props) {
  return (
    <div>
      <h2>Current Weather</h2>
      <p>
        {getWeatherIcon(weather.current_weather.weathercode)}🌡 Temperature:{" "}
        {weather.current_weather.temperature}°C
      </p>

      <p>💨 Wind Speed: {weather.current_weather.windspeed} km/h</p>

      <p>🧭 Wind Direction: {weather.current_weather.winddirection}°</p>

      <p>🕒 Time: {weather.current_weather.time}</p>
      <button onClick={() => onFavorite(locationName)}>Add to Favorites</button>
    </div>
  );
}

export default WeatherCard;
