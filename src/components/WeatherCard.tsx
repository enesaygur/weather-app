import { getWeatherIcon } from "../utils/weatherIcons";
import type { WeatherData } from "./../types/weather";
interface Props {
  weather: WeatherData;
}
function WeatherCard({ weather }: Props) {
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
    </div>
  );
}

export default WeatherCard;
