import Header from '../components/Header';
import { selectIsInternalClient, selectUser, verifyCredentials } from '../features/auth/loginSlice';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const About = React.lazy(() => import('../pages/About'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));

const Router = () => {
  const isInternalClient = useSelector(selectIsInternalClient);
  const currentUser = useSelector(selectUser);
  const externalDashboard =
    'https://datastudio.google.com/embed/reporting/a1a80867-df7c-4d82-bc35-396b068a78fb/page/8mn5C';

  const getRouteBygroup = group => {
    const api_base_report = 'https://datastudio.google.com/embed/reporting';
    const api_report = '/64d990aa-6f13-459d-812f-d936986d2c28/page/8mn5C?';
    return api_base_report + api_report + 'params=%7B%22ds8.userlogueadogrupo%22:%22' + group + '%22%7D';
  };

  const dispatch = useDispatch();

  useEffect(() => {
    void dispatch(verifyCredentials());
  }, [dispatch]);

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
