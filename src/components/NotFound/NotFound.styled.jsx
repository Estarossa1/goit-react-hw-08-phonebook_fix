import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const NotFoundHeading = styled.h1`
  font-size: 32px;
  color: #333;
`;

export const NotFoundText = styled.p`
  font-size: 18px;
  color: #555;
`;

export const NotFoundLink = styled(Link)`
  font-size: 16px;
  color: orange;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;