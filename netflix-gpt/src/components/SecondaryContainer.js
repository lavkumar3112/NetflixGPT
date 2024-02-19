import React from 'react';
import {useSelector} from "react-redux";
import MovieList from './MovieList'

const SecondaryContainer = () => {
  
  const movies=useSelector(store=>store.movies);

  return (
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      {movies.nowPlayingMovies && <MovieList title="Now Playing" movies={movies?.nowPlayingMovies}/>}
      {movies.nowPlayingMovies && <MovieList title="Top rated" movies={movies?.topRatedMovies}/>}
      {movies.nowPlayingMovies && <MovieList title="Popular" movies={movies?.popularMovies}/>}
      {movies.nowPlayingMovies && <MovieList title="Upcoming movies" movies={movies?.upcomingMovies}/>}
      {/* <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/> */}
      </div>
    </div>
  )
}

export default SecondaryContainer