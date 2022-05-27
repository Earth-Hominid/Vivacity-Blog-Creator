import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import Homepage from './Homepage';
import NotFoundPage from './NotFoundPage';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/vivacity" element={<Homepage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
