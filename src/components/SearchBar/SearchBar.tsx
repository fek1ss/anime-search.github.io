import React,{ useState } from "react";
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void; 
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>(""); 

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query); 
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search anime..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Локальное обновление состояния
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Отправка при Enter
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
