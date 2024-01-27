import { CreateFilterPageAsync } from 'pages/create-filter-page';
import { EditFilterPageAsync } from 'pages/edit-filter-page';
import { FiltersPageAsync } from 'pages/filters-page';
import { MenuPageAsync } from 'pages/menu-page';
import { PaymentPageAsync } from 'pages/payment-page';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';

export function Router() {
  return (
    <Routes>
      <Route path={ROUTES.menu} element={<MenuPageAsync />} />
      <Route path={ROUTES.payment} element={<PaymentPageAsync />} />
      <Route path={ROUTES.filters} element={<FiltersPageAsync />} />
      <Route path={`${ROUTES.editFilter}/:id`} element={<EditFilterPageAsync />} />
      <Route path={ROUTES.createFilter} element={<CreateFilterPageAsync />} />
      {/* TODO: сделать страницу "не найдено" с редикректом на меню */}
      <Route path="*" element={<Navigate to={ROUTES.menu} />} />
    </Routes>
  );
}
