import { Navigate } from 'react-router-dom';
import { useAuth } from '../redux/auth/useAuth';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};