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
      <section className="h-screen bg-slate-100"></section>
    </>
  );
};

export default Dashboard;
