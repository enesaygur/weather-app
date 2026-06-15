interface Props {
  history: string[];
  onSelect: (city: string) => void;
  onClear: () => void;
}
function SearchHistory({ history, onSelect, onClear }: Props) {
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
      <button onClick={onClear}>Clear History</button>
    </div>
  );
}

export default SearchHistory;
