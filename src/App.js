import './App.css';
import { selectIsInitialized, verifyCredentials } from './features/auth/loginSlice';
import Login from './pages/Login';
import Router from './routes/index';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    void dispatch(verifyCredentials());
  }, [dispatch]);

  const isInitialized = useSelector(selectIsInitialized);
  return (
    <div className="content">
      {isInitialized ? <Router /> : <Login />}
      <ToastContainer />
    </div>
  );
}

export default App;
