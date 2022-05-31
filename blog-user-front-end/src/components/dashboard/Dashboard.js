import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Welcome from './Welcome';
import CreateBlogModal from './modals/CreateBlogModal';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import { getBlogs, reset } from '../../features/blogs/blogSlice';

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
  const { blogs, isLoading, isError, message } = useSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/vivacity');
    }

    dispatch(getBlogs());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {initialPage && <Welcome user={user} openModal={openModal} />}
      {modal && <CreateBlogModal closeModal={closeModal} />}
    </>
  );
};

export default Dashboard;
