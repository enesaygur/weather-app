export function getWeatherIcon(code: number) {
  if (code === 0) return "☀️";

  if (code >= 1 && code <= 2) return "🌤";

  if (code === 3) return "☁️";

  if (code >= 51 && code <= 67) return "🌧";

  if (code >= 71 && code <= 77) return "❄️";

  if (code >= 80 && code <= 82) return "🌦";

  if (code >= 95) return "⛈";

  return "❓";
}
