import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import BlogForm from './BlogForm';

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
      <section className="h-screen dashboard">
        <div className="pt-5 text-center">
          <h1 className="text-3xl text-slate-600 font-bold font-[PaytoneOne]">
            Welcome back {user && user.alias}
          </h1>
        </div>
        <div className="m-5 font-bold text-slate-500 ">
          <p className="ml-5 text-sm">
            “Action is the foundational key to all success.” – Pablo Picasso.
          </p>
          <div className="flex flex-col">
            <h2 className="text-4xl ml-5 pt-2 text-slate-800 font bold font-[PaytoneOne]">
              Create new blog
            </h2>
            <button
              className="ml-5 mt-6 shadow-md rounded-lg flex justify-center items-center border-4 border-dashed h-32 w-32 border-slate-400
            hover:border-indigo-500"
            >
              <div className="p-6 w-auto text-white bg-indigo-500 rounded-full hover:animate-spin ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="mt-5 flex flex-col">
            <h2 className="text-4xl ml-5 pt-2 text-slate-800 font bold font-[PaytoneOne]">
              Recent blogs
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
