import type { WeatherData } from "./../types/weather";
interface Props {
  weather: WeatherData;
}
function WeatherCard({ weather }: Props) {
  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {weather.current_weather.temperature}</p>
      <p>Wind Speed: {weather.current_weather.windspeed}</p>
      <p>Wind Direction: {weather.current_weather.winddirection}</p>
      <p>Time: {weather.current_weather.time}</p>
    </div>
  );
}

export default WeatherCard;
