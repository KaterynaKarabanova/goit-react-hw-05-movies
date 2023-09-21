import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { HomeTitle } from './Home';
import { useLocation } from 'react-router-dom';
import { getMoieById } from '../servises/getData';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const location = useLocation();
  const goDackRef = useRef(location.state?.from || '');
  useEffect(() => {
    getMoieById(movieId).then(setDetails);
  }, [movieId]);
  return (
    <DetailWrapper>
      <GoBackLink to={goDackRef.current || '/movies'}>Go back</GoBackLink>
      <HomeTitle>Movie Details</HomeTitle>
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
          <DetailText>
            <DetailSpan>Release Date:</DetailSpan> {details.release_date}
          </DetailText>
          <DetailText>
            <DetailSpan>Rating:</DetailSpan> {details.vote_average}
          </DetailText>
          <DetailText>
            <DetailSpan>Budget:</DetailSpan>
            {details.budget}$
          </DetailText>
          {details.tagline && (
            <DetailText>
              <DetailSpan>Tagline:</DetailSpan>"{details.tagline}"
            </DetailText>
          )}
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
const DetailSpan = styled.span`
  color: black;
  font-size: 25px;
  font-weight: 600;
  max-width: 800px;
  margin-right: 10px;
`;
const DetailLink = styled(Link)`
  text-decoration: none;
  font-size: 40px;
  font-weight: 500;
  color: azure;
  margin-right: 50px;
`;
const GoBackLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  font-weight: 500;

  background-image: linear-gradient(
    to right,
    #e55d87 0%,
    #5fc3e4 51%,
    #e55d87 100%
  );
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
`;
