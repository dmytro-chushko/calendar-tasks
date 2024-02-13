import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from 'src/modules/Header/Header';
import { AppRoute } from 'src/utils/consts';

const Month = lazy(() => import('src/pages/Month'));
const Week = lazy(() => import('src/pages/Week'));

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.MONTH} element={<Header />}>
        <Route index element={<Month />} />
        <Route path={AppRoute.WEEK} element={<Week />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
