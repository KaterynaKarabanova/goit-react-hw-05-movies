import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '30f1a34785d80940e65d6f0a855b573d';
export const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
  }
};
export const getMoviesByName = async value => {
  try {
    const { data } = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${value}&language=en-US&page=1&include_adult=false`
    );
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
  }
};
export const getMovieByQuery = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );

  return data.results;
};
export const getMoieById = async id => {
  try {
    const { data } = await axios.get(
      `movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
  }
};
export const getReviewsMovie = async id => {
  try {
    const { data } = await axios.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );

    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
  }
};
export const getCastMovie = async id => {
  try {
    const { data } = await axios.get(
      `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );

    return data.cast;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
  }
};
