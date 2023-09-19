import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const getReviewsMovie = async id => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=30f1a34785d80940e65d6f0a855b573d&language=en-US`
      );

      setReviews(data.results);
    } catch (error) {
      console.error('Error fetching trending movies:', error.message);
    }
  };
  useEffect(() => {
    getReviewsMovie(movieId);
  }, [movieId]);
  console.log(reviews);
  return (
    <ReviewsList>
      {reviews.map(el => (
        <ReviewsItem key={el.id}>
          <p>
            {el.author_details.username} {el.created_at}
          </p>
          <h2>{el.author}</h2>
          <p>{el.content}</p>
        </ReviewsItem>
      ))}
    </ReviewsList>
  );
};
const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  margin: 0;
  margin-top: 20px;
  padding: 0;
`;
const ReviewsItem = styled.li`
  padding: 5px 10px;
  background-image: linear-gradient(
    111.1deg,
    rgba(0, 40, 70, 1) -4.8%,
    #ff7373b2 82.7%,
    #ffb07bc9 97.2%
  );
  border: 10px double #fff7ff;
  border-radius: 20px;
  color: azure;
`;
