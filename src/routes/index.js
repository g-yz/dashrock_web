import Header from '../components/Header';
import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const About = React.lazy(() => import('../pages/About'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <React.Suspense fallback={<h1>Loading All Routes</h1>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default Router;
