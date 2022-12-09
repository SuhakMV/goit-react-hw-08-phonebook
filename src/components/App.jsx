import Home from 'page/Home';
import Login from 'page/Login';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RegisterForm } from './RegisterForm/RegisterForm';

export const App = () => {
  return (
    <Routes>
      <Route patch="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  );
};
