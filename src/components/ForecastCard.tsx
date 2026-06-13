import { getWeatherIcon } from "../utils/weatherIcons";
import type { WeatherData } from "./../types/weather";
interface Props {
  weather: WeatherData;
}
function ForecastCard({ weather }: Props) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };
  return (
    <div>
      <h2>Day Forecast</h2>
      {weather.daily.time.map((day, index) => (
        <div key={day}>
          <p>{formatDate(day)}</p>
          <p>
            {getWeatherIcon(weather.daily.weathercode[index])} ⬇ Min:
            {weather.daily.temperature_2m_min[index]}°C
          </p>
          <p>
            {getWeatherIcon(weather.daily.weathercode[index])} ⬆ Max:
            {weather.daily.temperature_2m_max[index]}°C
          </p>
        </div>
      ))}
    </div>
  );
}
export default ForecastCard;
