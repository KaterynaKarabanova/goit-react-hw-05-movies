import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
const Home = () => {
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
  const location = useLocation();
  return (
    <div>
      <HomeTitle>Trending today</HomeTitle>
      <Homelist>
        {trendingMovies.map(el => (
          <HomeItem
            key={el.id}
            to={`/movies/${el.id}`}
            state={{ from: location }}
          >
            {el.title}
          </HomeItem>
        ))}
      </Homelist>
    </div>
  );
};
export default Home;
const Homelist = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const HomeTitle = styled.h1`
  text-decoration: none;
  font-size: 50px;
  font-weight: 700;
  color: azure;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const HomeItem = styled(Link)`
  display: flex;
  gap: 30px;
  height: 60px;
  color: #efe7ee;
  background-image: linear-gradient(to top, #c79081 0%, #dfa579 100%);
  border-radius: 15px;
  text-decoration: none;
  padding: 15px 20px;
  font-size: 50px;
  font-weight: 700;
`;
