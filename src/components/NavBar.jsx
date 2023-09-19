import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
export const NavBar = () => {
  const { movieId } = useParams();

  const navArr = [
    {
      src: '/',
      title: 'Home',
    },
    {
      src: '/movies',
      title: 'Movies',
    },
    {
      src: '/movies/:movieId',
      title: 'MovieDetails',
    },
    {
      src: `/movies/${movieId}/cast`,
      title: 'Cast',
    },
    {
      src: `/movies/${movieId}/reviews`,
      title: 'Reviews',
    },
  ];
  return (
    <SideBar>
      {navArr.map(({ src, title }) => (
        <StyledLink key={src} to={src}>
          {title}
        </StyledLink>
      ))}
    </SideBar>
  );
};
const SideBar = styled.nav`
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
  min-height: 100vh;
  border-right: 2px solid black;
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: fixed;
  width: 200px;
  padding: 40px 20px;
`;
export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: black;

  &.active {
    background-color: #602547;
    color: white;
  }
  &:hover:not(.active) {
    background-color: #f392ed;
  }
`;
