import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home';
import { Movies } from './Movies';
import { MovieDetails } from './MovieDetails';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<h1>Cast</h1>} />
            <Route path="reviews" element={<h1>Reviews</h1>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
