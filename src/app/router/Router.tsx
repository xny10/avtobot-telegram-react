import { FilterPageAsync } from 'pages/filter-page';
import { HomePageAsync } from 'pages/home-page';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';

export function Router() {
  return (
    <Routes>
      <Route index element={<HomePageAsync />} />
      <Route path={`${ROUTES.filter}/:id`} element={<FilterPageAsync />} />
    </Routes>
  );
}
