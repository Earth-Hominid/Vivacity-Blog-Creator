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
      <section className="h-screen dashboard-polka">
        <div className="pt-8 text-center">
          <h1 className="text-4xl text-indigo-500 font-bold font-[PaytoneOne]">
            Welcome back {user && user.alias}!
          </h1>
        </div>
        <div className=" m-8 p-4 w-60% h-auto rounded-xl">
          <p className="ml-5 text-sm text-slate-500 font-semibold">
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
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
