import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { HomeTitle } from './Home';
import { useLocation } from 'react-router-dom';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const location = useLocation();
  const goDackRef = useRef(location.state?.from || '');
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
  return (
    <DetailWrapper>
      <HomeTitle>Movie Details</HomeTitle>
      <DetailLink to={goDackRef.current || '/movies'}>Go back</DetailLink>

      <DetailDiv>
        <Detailimg
          src={
            details.backdrop_path
              ? `https://image.tmdb.org/t/p/original${details.backdrop_path}`
              : 'https://www.montereyupperhutt.co.nz/template_1/img/default-movie-landscape.jpg'
          }
          alt={details.title}
        />
        <div>
          <DetailTitle>{details.title}</DetailTitle>
          <DetailText>{details.overview}</DetailText>
          <p>Release Date: {details.release_date}</p>
          <p>Rating: {details.vote_average}</p>
          <p>Budget:{details.budget}$</p>
          {details.tagline && <p>Tagline:{details.tagline}</p>}
        </div>
      </DetailDiv>
      <DetailLink to="cast">Cast</DetailLink>
      <DetailLink to="reviews">Reviews</DetailLink>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </DetailWrapper>
  );
};
export default MovieDetails;
const DetailWrapper = styled.div`
  padding: 10px 30px;
`;
const DetailDiv = styled.div`
  display: flex;
  gap: 40px;
  width: fit-content;
  background-image: linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%);
  padding: 10px 40px 40px 10px;
  border-radius: 15px;
  margin-bottom: 20px;
`;
const Detailimg = styled.img`
  width: 1000px;
`;
const DetailTitle = styled.h3`
  color: black;
  font-size: 35px;
`;
const DetailText = styled.p`
  color: black;
  font-size: 25px;
  max-width: 800px;
`;
const DetailLink = styled(Link)`
  text-decoration: none;
  font-size: 40px;
  font-weight: 500;
  color: azure;
  margin-right: 50px;
`;
