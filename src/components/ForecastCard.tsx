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
            {weather.daily.temperature_2m_min[index]}°C /
            {weather.daily.temperature_2m_max[index]}°C
          </p>
        </div>
      ))}
    </div>
  );
}
export default ForecastCard;
