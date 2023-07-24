import { NotFoundContainer, NotFoundHeading, NotFoundText, NotFoundLink } from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundHeading>404 - Page Not Found</NotFoundHeading>
      <NotFoundText>The requested page could not be found.</NotFoundText>
      <NotFoundLink to="/">Go back to the homepage</NotFoundLink>
    </NotFoundContainer>
  );
};

export default NotFound;