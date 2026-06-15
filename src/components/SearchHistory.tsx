interface Props {
  history: string[];
  onSelect: (city: string) => void;
}
function SearchHistory({ history, onSelect }: Props) {
  return (
    <div>
      <h2>Recent Searches</h2>
      {history.map((city) => (
        <p
          key={city}
          onClick={() => onSelect(city)}
          style={{ cursor: "pointer" }}
        >
          {city}
        </p>
      ))}
    </div>
  );
}

export default SearchHistory;
