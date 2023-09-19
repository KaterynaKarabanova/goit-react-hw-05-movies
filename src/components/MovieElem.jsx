import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieElem = ({
  back = 'https://www.montereyupperhutt.co.nz/template_1/img/default-movie-landscape.jpg',
  title,
  overview,
  release_date,
  vote_average,
  id,
}) => {
  return (
    <MovieItem to={`/movies/${id}`}>
      <MovieImg
        src={`https://image.tmdb.org/t/p/original${back}`}
        alt={title}
      />
      <MovieTitle>{title}</MovieTitle>
      <p>{overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Rating: {vote_average}</p>
    </MovieItem>
  );
};

const MovieImg = styled.img`
  width: 100%;
`;

const MovieItem = styled(Link)`
  max-width: 570px;
  background-image: linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%);
  border-radius: 15px;
  text-decoration: none;
  padding: 15px 20px;
  color: black;
`;
const MovieTitle = styled.h3`
  color: linear-gradient(60deg, #29323c 0%, #485563 100%);
  font-size: 35px;
`;
