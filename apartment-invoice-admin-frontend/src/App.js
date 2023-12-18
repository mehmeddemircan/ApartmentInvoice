
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import BlockPage from './pages/BlockPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { isUserLoggedIn } from './redux/actions/AuthActions';
import PrivateRoute from './routes/PrivateRoute';
import FlatPage from './pages/FlatPage';
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth)

  // When we fresh the page if you are in logged in  stay logged in
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [dispatch, auth.authenticate]);
  return (
    <Router>
    <Routes>
      <Route index path="/" element={  <PrivateRoute><HomePage /></PrivateRoute>} />
      <Route index path="/login" element={<LoginPage />} />

      <Route  path="/blocks" element={<PrivateRoute><BlockPage /></PrivateRoute>} />
      <Route  path="/blocks/:blockNo/add-new-flat" element={<PrivateRoute><FlatPage /></PrivateRoute>} />
      <Route  path="*" element={<NotFoundPage />} />
   
    </Routes>
  </Router>
  );
}

export default App;
