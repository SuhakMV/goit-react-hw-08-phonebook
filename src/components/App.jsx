import Home from 'page/Home';
import Login from 'page/Login';
import Contacts from 'page/Contacts';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const { isCurrent } = useAuth();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return isCurrent ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route patch="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterForm />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
