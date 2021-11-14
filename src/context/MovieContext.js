import axios from '../config/axios';
import { createContext, useEffect, useState } from 'react';

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [movieListsBlock, setMovieListsBlock] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await axios.get();
      setMovieListsBlock(movie.data.results);
    };

    fetchMovie();
  }, []);
  console.log(movieListsBlock);

  const filterSearchMovie = [...movieListsBlock].filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <MovieContext.Provider value={{ movieListsBlock, filterSearchMovie, search, setSearch }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };
