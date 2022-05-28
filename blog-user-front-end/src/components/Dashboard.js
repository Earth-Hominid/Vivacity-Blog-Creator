import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoadingSpinner from './loading-spinner/LoadingSpinner';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/vivacity');
    }
  }, [user, navigate]);

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
