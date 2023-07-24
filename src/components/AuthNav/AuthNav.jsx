import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const NavigationContainer = styled(Box)({
  display: 'flex',
  gap: '20px',
});

const Navigation = () => {
  return (
    <NavigationContainer component="nav">
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </NavigationContainer>
  );
};

export default Navigation;