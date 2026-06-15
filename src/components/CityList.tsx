interface Props {
  title: string;
  items: string[];
  onSelect: (city: string) => void;
  onRemove: (city: string) => void;
}
function CityList({ title, items, onSelect, onRemove }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((city) => (
          <li key={city}>
            <span onClick={() => onSelect(city)} style={{ cursor: "pointer" }}>
              {city}
            </span>
            <button onClick={() => onRemove(city)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
