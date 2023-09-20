import { useState } from 'react';
import axios from 'axios';
import { MovieElem } from './MovieElem';
import styled from 'styled-components';
import { HomeTitle } from './Home';
export const Movies = () => {
  const [filter, setFilter] = useState('');
  console.log(filter);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const getMoviesByName = async (e, value) => {
    e.preventDefault();
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
      <HomeTitle>Movies</HomeTitle>
      <HomeTitle>Find a movie by name</HomeTitle>
      <form onSubmit={e => getMoviesByName(e, filter)}>
        <MovieInput type="text" onChange={e => setFilter(e.target.value)} />
        <MovieBtn type="submit">Search</MovieBtn>
      </form>
      <MovieList>
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
      </MovieList>
    </div>
  );
};
const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  grid-auto-rows: minmax(60px, auto);
  margin: 0;
  padding: 0;
  margin-top: 20px;
`;
const MovieInput = styled.input`
  border-radius: 15px;
  width: 400px;
  height: 30px;
  padding: 5px 10px;
  font-size: 20px;
`;
const MovieBtn = styled.button`
  border-radius: 15px;
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
  height: 40px;
  padding: 5px 10px;
  font-size: 20px;
  color: azure;
  font-weight: 600;
`;
