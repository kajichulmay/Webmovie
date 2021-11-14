import React from 'react';
import Banner from '../components/Banner';
import MovieBlock from '../components/MovieBlock';

function Home() {
  return (
    <div className="homePage">
      <Banner />
      <MovieBlock />
    </div>
  );
}

export default Home;
