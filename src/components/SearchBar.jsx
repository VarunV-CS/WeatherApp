import React from 'react';
import search_icon from '../assets/search.png';
import './SearchBar.css';

const SearchBar = ({ value, onChange, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        className="bar"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <img src={search_icon} alt="Search" onClick={onSearch} />
    </div>
  );
};

export default SearchBar;
