import React from 'react';
import {useSelector} from "react-redux";
import MovieList from './MovieList'

const SecondaryContainer = () => {
  
  const movies=useSelector(store=>store.movies);

  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-52  pl-4 md:pl-12 relative z-20'>
      {movies.nowPlayingMovies && <MovieList title="Now Playing" movies={movies?.nowPlayingMovies}/>}
      {movies.nowPlayingMovies && <MovieList title="Top rated" movies={movies?.topRatedMovies}/>}
      {movies.nowPlayingMovies && <MovieList title="Popular" movies={movies?.popularMovies}/>}
      {movies.nowPlayingMovies && <MovieList title="Upcoming movies" movies={movies?.upcomingMovies}/>}
      </div>
    </div>
  )
}

export default SecondaryContainer