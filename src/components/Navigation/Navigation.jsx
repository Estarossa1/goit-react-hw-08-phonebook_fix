import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from 'redux/auth/useAuth';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;


const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav style={{
      display: 'flex',
      gap: 20,
    }}>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};

export default Navigation;