import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const getCastMovie = async id => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=30f1a34785d80940e65d6f0a855b573d&language=en-US`
      );

      setCast(data.cast);
    } catch (error) {
      console.error('Error fetching trending movies:', error.message);
    }
  };
  useEffect(() => {
    getCastMovie(movieId);
  }, [movieId]);
  console.log(cast);
  return (
    <CastList>
      {cast.map(el => (
        <DetailItem key={el.id}>
          <DetailImg
            src={`https://image.tmdb.org/t/p/original${el.profile_path}`}
            alt=""
          />
          <h2>{el.name}</h2>
          <p>Character: {el.character}</p>
        </DetailItem>
      ))}
    </CastList>
  );
};
const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
  grid-auto-rows: minmax(10px, auto);
  margin: 0;
  padding: 30px 10px;
  margin-top: 20px;
  list-style: none;
`;
const DetailImg = styled.img`
  width: 250px;
  border-radius: 40px;
  border: 1rem solid #ffffff;
`;
const DetailItem = styled.li`
  text-align: center;
  color: azure;
`;
