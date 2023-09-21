import { useEffect, useState } from 'react';
import { MovieElem } from '../components/MovieElem';
import styled from 'styled-components';
import { HomeTitle } from './Home';
import { getMoviesByName } from '../servises/getData';
import { getMovieByQuery } from '../servises/getData';
import { useSearchParams } from 'react-router-dom';
const Movies = () => {
  const [filter, setFilter] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredMovies, setFilteredMovies] = useState([]);

  const onSubmit = async (e, value) => {
    e.preventDefault();
    getMoviesByName(value).then(setFilteredMovies);
    if (filter.length) {
      setSearchParams({ query: filter });
    }
  };

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
      try {
        const movieByQuery = await getMovieByQuery(currentQuery);
        setFilteredMovies(movieByQuery);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieByQuery();
  }, [searchParams]);

  return (
    <div>
      <HomeTitle>Movies</HomeTitle>
      <HomeTitle>Find a movie by name</HomeTitle>
      <form onSubmit={e => onSubmit(e, filter)}>
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
export default Movies;
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
