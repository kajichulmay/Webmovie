import React, { useContext } from 'react';
import { MovieContext } from '../../../context/MovieContext';

function SearchBox() {
  const { search, setSearch } = useContext(MovieContext);
  return (
    <div>
      <input className="searchBox" value={search} onChange={e => setSearch(e.target.value)} />
      <i className="bi bi-search"></i>
    </div>
  );
}

export default SearchBox;
