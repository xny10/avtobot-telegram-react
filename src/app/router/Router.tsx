import { ConfiguratorPage } from 'pages/configurator-page';
import { HomePage } from 'pages/home-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/configure" element={<ConfiguratorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
