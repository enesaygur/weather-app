interface Props {
  history: string[];
}
function SearchHistory({ history }: Props) {
  return (
    <div>
      <h2>Recent Searches</h2>
      {history.map((city) => (
        <p key={city}>{city}</p>
      ))}
    </div>
  );
}

export default SearchHistory;
