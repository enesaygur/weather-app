import { convertTemperature } from "../utils/temperature";
import { getWeatherIcon } from "../utils/weatherIcons";
import type { WeatherData } from "./../types/weather";
interface Props {
  weather: WeatherData;
  locationName: string;
  unit: "C" | "F";
  onFavorite: (city: string) => void;
}
function WeatherCard({ weather, locationName, onFavorite, unit }: Props) {
  const temp = convertTemperature(weather.current_weather.temperature, unit);
  return (
    <div>
      <h2>Current Weather</h2>
      <p>
        {getWeatherIcon(weather.current_weather.weathercode)}🌡 Temperature:{" "}
        {temp}
      </p>

      <p>💨 Wind Speed: {weather.current_weather.windspeed} km/h</p>

      <p>🧭 Wind Direction: {weather.current_weather.winddirection}°</p>

      <p>🕒 Time: {weather.current_weather.time}</p>
      <button onClick={() => onFavorite(locationName)}>Add to Favorites</button>
    </div>
  );
}

export default WeatherCard;
