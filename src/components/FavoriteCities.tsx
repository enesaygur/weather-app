interface Props {
  favorites: string[];
  onSelect: (city: string) => void;
  onRemove: (city: string) => void;
}
function FavoriteCities({ favorites, onSelect, onRemove }: Props) {
  return (
    <div>
      <h2>Favorite Cities</h2>
      {favorites.map((city) => (
        <div key={city} style={{ display: "flex", gap: "8px" }}>
          <p
            key={city}
            onClick={() => onSelect(city)}
            style={{ cursor: "pointer" }}
          >
            {city}
          </p>
          <button onClick={() => onRemove(city)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default FavoriteCities;
