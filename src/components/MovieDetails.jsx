import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const getMoieById = async id => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=30f1a34785d80940e65d6f0a855b573d&language=en-US`
      );

      setDetails(data);
    } catch (error) {
      console.error('Error fetching trending movies:', error.message);
    }
  };
  useEffect(() => {
    getMoieById(movieId);
  }, [movieId]);
  console.log(details);
  return (
    <div>
      <h1>MovieDetails{movieId}</h1>

      <DetailDiv>
        <Detailimg
          src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
          alt={details.title}
        />
        <div>
          <h3>{details.title}</h3>
          <p>{details.overview}</p>
          <p>Release Date: {details.release_date}</p>
          <p>Rating: {details.vote_average}</p>
          <p>Budget:{details.budget}$</p>
          <p>Tagline:{details.tagline}</p>
        </div>
      </DetailDiv>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
    </div>
  );
};
const DetailDiv = styled.div`
  display: flex;
`;
const Detailimg = styled.img`
  width: 800px;
`;
