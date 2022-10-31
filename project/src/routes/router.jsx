import { Routes, Route } from 'react-router';
import Layout from '../layouts/Layout';
import { Main, Board } from '../pages';

export default function router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='/board' element={<Board />} />
      </Route>
    </Routes>
  );
}
