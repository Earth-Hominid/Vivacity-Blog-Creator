import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import Homepage from './Homepage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import NotFoundPage from './NotFoundPage';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/vivacity" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
