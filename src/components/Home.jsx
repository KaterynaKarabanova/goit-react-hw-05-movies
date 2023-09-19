import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieElem } from './MovieElem';
import styled from 'styled-components';
export const Home = () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  const API_KEY = '30f1a34785d80940e65d6f0a855b573d';

  const [trendingMovies, setTrendingMovies] = useState([]);

  const getTrendingMovies = async () => {
    try {
      const { data } = await axios.get(
        `trending/movie/week?api_key=${API_KEY}`
      );
      setTrendingMovies(data.results);
    } catch (error) {
      console.error('Error fetching trending movies:', error.message);
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []); // Fetch data when the component mounts

  return (
    <div>
      <HomeTitle>The most popular films</HomeTitle>
      <Homelist>
        {trendingMovies.map(el => (
          <MovieElem
            key={el.id} // Remember to add a unique key for each element in a list
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
export const Homelist = styled.ul`
  display: flex;
  row-gap: 20px;
  column-gap: 40px;
  flex-wrap: wrap;
`;
const HomeTitle = styled.h1`
  display: inline;
`;
