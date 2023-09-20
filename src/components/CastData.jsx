import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
const CastData = () => {
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
  return (
    <CastList>
      {cast.map(el => (
        <DetailItem key={el.id}>
          <DetailImg
            src={
              el.profile_path
                ? `https://image.tmdb.org/t/p/original${el.profile_path}`
                : 'https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'
            }
            alt=""
          />
          <h2>{el.name}</h2>
          <p>Character: {el.character}</p>
        </DetailItem>
      ))}
    </CastList>
  );
};
export default CastData;
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
