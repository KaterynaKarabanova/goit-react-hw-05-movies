import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from '../servises/getData';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies);
  }, []);
  const location = useLocation();
  return (
    <div>
      <MainDev>
        <MainTitle>Choose a movie</MainTitle>
        <img
          src="https://www.pngmart.com/files/5/Movie-PNG-Image.png"
          alt="hh"
        />
      </MainDev>
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
export const HomeTitle = styled.h2`
  text-decoration: none;
  font-size: 50px;
  font-weight: 700;
  color: azure;
  margin-top: 40px;
  margin-bottom: 20px;
`;
const MainTitle = styled.h1`
  text-decoration: none;
  font-size: 160px;
  text-align: center;
  max-width: 650px;
  text-transform: uppercase;
  background: linear-gradient(to right, #ffffff 0%, #fbffb1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  color: azure;
  margin-top: 40px;
  margin-bottom: 20px;
`;
const MainDev = styled.div`
  display: flex;
  gap: 80px;
  justify-content: center;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  background-size: 20%;
  background-repeat: repeat;
  border: 15px dashed #ffffff;
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
