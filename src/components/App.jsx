import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home';
import { Movies } from './Movies';
import { MovieDetails } from './MovieDetails';
import { Reviews } from './Reviews';
import { Cast } from './Сast';
import styled from 'styled-components';

export const App = () => {
  return (
    <AppWrap>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
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
