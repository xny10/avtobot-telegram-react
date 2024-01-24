import { CreateFilterPageAsync } from 'pages/create-filter-page';
import { EditFilterPageAsync } from 'pages/edit-filter-page';
import { FiltersPageAsync } from 'pages/filters-page';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';

export function Router() {
  return (
    <Routes>
      <Route index element={<FiltersPageAsync />} />
      <Route path={`${ROUTES.editFilter}/:id`} element={<EditFilterPageAsync />} />
      <Route path={ROUTES.createFilter} element={<CreateFilterPageAsync />} />
      <Route path="*" element={<Navigate to={ROUTES.filters} />} />
    </Routes>
  );
}
