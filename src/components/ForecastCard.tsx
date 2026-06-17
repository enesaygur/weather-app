import { convertTemperature } from "../utils/temperature";
import { getWeatherIcon } from "../utils/weatherIcons";
import type { WeatherData } from "./../types/weather";
interface Props {
  weather: WeatherData;
  unit: "C" | "F";
}
function ForecastCard({ weather, unit }: Props) {
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
            {convertTemperature(weather.daily.temperature_2m_min[index], unit)}
          </p>
          <p>
            {getWeatherIcon(weather.daily.weathercode[index])} ⬆ Max:
            {convertTemperature(weather.daily.temperature_2m_max[index], unit)}
          </p>
        </div>
      ))}
    </div>
  );
}
export default ForecastCard;
