import React, { useState } from "react";
interface Props {
  onSearch: (city: string) => void;
}
function SearchBar({ onSearch }: Props) {
  const [city, setCity] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;
    
    onSearch(city.trim());
    setCity("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
