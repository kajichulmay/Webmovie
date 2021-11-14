import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieList from './MovieList';

function MovieContainer() {
  const { movieListsBlock, filterSearchMovie } = useContext(MovieContext);

  return (
    <div className="movieList">
      {filterSearchMovie.map(item => (
        <MovieList key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MovieContainer;
