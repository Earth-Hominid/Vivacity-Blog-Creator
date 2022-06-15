import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Welcome from './welcome-page/Welcome';
import CreateBlogModal from './modal-page/CreateBlogModal';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import { reset, getBlogs } from '../../features/blogs/blogSlice';

const Dashboard = () => {
  const [initialPage, setInitialPage] = useState(true);
  const [modal, setModal] = useState(false);

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
      navigate('/');
    }

    dispatch(getBlogs());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  const openModal = () => {
    setModal(true);
    setInitialPage(false);
  };

  const closeModal = () => {
    setModal(false);
    setInitialPage(true);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {initialPage && (
        <Welcome user={user} blogs={blogs} openModal={openModal} />
      )}

      {modal && <CreateBlogModal closeModal={closeModal} />}
    </>
  );
};

export default Dashboard;
