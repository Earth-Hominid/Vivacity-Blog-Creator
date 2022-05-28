import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Welcome from './Welcome';
import CreateBlogModal from './modals/CreateBlogModal';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';

const Dashboard = () => {
  const [initialPage, setInitialPage] = useState(true);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
    setInitialPage(false);
  };

  const closeModal = () => {
    setModal(false);
    setInitialPage(true);
  };
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
      {initialPage && <Welcome user={user} openModal={openModal} />}
      {modal && <CreateBlogModal closeModal={closeModal} />}
    </>
  );
};

export default Dashboard;
