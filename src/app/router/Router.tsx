import { FilterPage } from 'pages/filter-page';
import { HomePage } from 'pages/home-page';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';

export function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={`${ROUTES.filter}/:id`} element={<FilterPage />} />
    </Routes>
  );
}
