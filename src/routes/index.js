import Header from '../components/Header';
import { selectIsInternalClient, selectUser } from '../features/auth/loginSlice';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const About = React.lazy(() => import('../pages/About'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));

const Router = () => {
  const isInternalClient = useSelector(selectIsInternalClient);
  const currentUser = useSelector(selectUser);
  const externalDashboard =
    'https://datastudio.google.com/embed/u/1/reporting/41ad4f31-d83b-4702-a181-9ab285d88ad6/page/p_8nylp4oizc';

  const getRouteBygroup = group => {
    const api_base_report = 'https://datastudio.google.com/embed/reporting';
    const api_report = '/64d990aa-6f13-459d-812f-d936986d2c28/page/8mn5C?';
    return api_base_report + api_report + 'params=%7B%22ds8.userlogueadogrupo%22:%22' + group + '%22%7D';
  };

  return (
    <BrowserRouter>
      <Header />
      <React.Suspense fallback={<h1>Loading All Routes</h1>}>
        <Routes>
          {isInternalClient ? (
            <Route path="/" element={<Dashboard path={getRouteBygroup(currentUser?.group)} />} />
          ) : (
            <Route path="/" element={<Dashboard path={externalDashboard} />} />
          )}
          <Route path="/about" element={<About />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default Router;
