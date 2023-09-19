import { useState } from 'react';
import axios from 'axios';
import { MovieElem } from './MovieElem';

import { Homelist } from '../components/Home';
export const Movies = () => {
  const [filter, setFilter] = useState('');
  console.log(filter);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const getMoviesByName = async value => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=30f1a34785d80940e65d6f0a855b573d&query=${value}&language=en-US&page=1&include_adult=false`
      );
      setFilteredMovies(data.results);
    } catch (error) {
      console.error('Error fetching trending movies:', error.message);
    }
  };
  return (
    <div>
      <h1>Movies</h1>
      <h2>Find a movie by name</h2>
      <input type="text" onChange={e => setFilter(e.target.value)} />
      <button type="button" onClick={() => getMoviesByName(filter)}>
        Search
      </button>
      <Homelist>
        {filteredMovies.map(el => (
          <MovieElem
            key={el.id}
            id={el.id}
            back={el.backdrop_path}
            title={el.title}
            overview={el.overview}
            release_date={el.release_date}
            vote_average={el.vote_average}
          />
        ))}
      </Homelist>
    </div>
  );
};
// search/movie?query=sun&page=1
