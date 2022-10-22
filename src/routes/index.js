import Header from '../components/Header';
import { selectIsInternalClient } from '../features/auth/loginSlice';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const About = React.lazy(() => import('../pages/About'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));

const Router = () => {
  const isInternalClient = useSelector(selectIsInternalClient);
  const internalDashboard =
    'https://datastudio.google.com/embed/u/1/reporting/41ad4f31-d83b-4702-a181-9ab285d88ad6/page/p_8nylp4oizc';
  const externalDashboard = 'https://datastudio.google.com/gallery';

  return (
    <BrowserRouter>
      <Header />
      <React.Suspense fallback={<h1>Loading All Routes</h1>}>
        <Routes>
          {isInternalClient ? (
            <Route path="/" element={<Dashboard path={internalDashboard} />} />
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
