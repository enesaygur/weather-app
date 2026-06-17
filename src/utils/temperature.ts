export function convertTemperature(temp: number, unit: "C" | "F") {
  const value = unit === "C" ? temp : (temp * 9) / 5 + 32;
  return `${Math.round(value)}°${unit}`;
}
