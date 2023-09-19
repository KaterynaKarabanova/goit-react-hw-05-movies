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
      <h3>{title}</h3>
      <p>{overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Rating: {vote_average}</p>
    </MovieItem>
  );
};

const MovieImg = styled.img`
  width: 500px;
`;

const MovieItem = styled(Link)`
  max-width: 550px;
`;
