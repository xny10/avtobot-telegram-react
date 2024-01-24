import { EditFilterPageAsync } from 'pages/edit-filter-page';
import { FiltersPageAsync } from 'pages/filters-page';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';

export function Router() {
  return (
    <Routes>
      <Route index element={<FiltersPageAsync />} />
      <Route path={`${ROUTES.editFilter}/:id`} element={<EditFilterPageAsync />} />
    </Routes>
  );
}
