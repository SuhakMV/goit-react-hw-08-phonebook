import Home from 'page/Home';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route patch="/" element={<Layout />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
};
