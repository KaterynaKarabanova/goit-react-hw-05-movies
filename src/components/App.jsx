import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { lazy } from 'react';
import { Layout } from './Layout';

const Home = lazy(() => import('./Home'));
const Movies = lazy(() => import('./Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Reviews = lazy(() => import('./Reviews'));
const CastData = lazy(() => import('./CastData'));
export const App = () => {
  return (
    <AppWrap>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastData />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </AppWrap>
  );
};
const AppWrap = styled.div`
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  background-position: 50%;
  background-repeat: repeat;
  width: 100%;
  min-height: 100vh;
  background-attachment: fixed;
`;
