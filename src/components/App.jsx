import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useAuth } from 'redux/auth/useAuth';
import Loader from './Loader/Loader';
import ErrorPage from './ErrorPage/ErrorPage';

const RegisterPage = lazy(() =>
  import('../pages/RegisterPage')         // ! "register-page" 
);
const ContactsPage = lazy(() =>
  import('../pages/ContactsPage')         // ! "contacts-page" 
);

const LoginPage = lazy(() =>
  import('../pages/Login')                // ! "login-page"
);

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isRefreshing, error } = useAuth();

  if (error) {
    return <ErrorPage />;
  }

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
};