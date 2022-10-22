import Header from '../components/Header';
import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const About = React.lazy(() => import('../pages/About'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Pandas = React.lazy(() => import('../pages/Panda'));
const Cats = React.lazy(() => import('../pages/Cat'));

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <React.Suspense fallback={<h1>Loading All Routes</h1>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pandas" element={<Pandas />} />
          <Route path="/about" element={<About />} />
          <Route path="/cats" element={<Cats />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default Router;
