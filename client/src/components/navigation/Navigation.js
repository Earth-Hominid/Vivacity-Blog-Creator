import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo/light-logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const logoutUser = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <nav className="h-12 whitespace-nowrap flex flex-row items-center sticky top-0 z-50 bg-[#FFFEFD]">
      <div>
        <button className="p-1" onClick={goHome}>
          <img className="w-40" src={Logo} alt="vivacity logo" />
        </button>
      </div>
      <div className="flex flex-row align-items justify-end w-full space-x-6 mr-10">
        {user ? (
          <>
            <div>
              <button
                onClick={logoutUser}
                className="
              font-extrabold
              font-[Montserrat]
            bg-sky-500 
            py-1
            px-2
            border-2
            border-sky-500
            text-white 
            hover:border-2 
            hover:bg-[#FFFEFD] 
            hover:text-sky-500 
            hover:border-sky-500
            rounded-md 
            text-base"
              >
                Logout
              </button>
            </div>
            <div>
              <Link to="/dashboard">
                <p
                  className="font-[Montserrat] py-1 
            px-2 font-bold text-base hover:text-sky-500"
                >
                  Dashboard
                </p>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to="/login">
                <button
                  className="
              font-extrabold
              font-[Montserrat]
            bg-sky-500 
            py-1
            px-2
            border-2
            border-sky-500
            text-white 
            hover:border-2 
            hover:bg-[#FFFEFD] 
            hover:text-sky-500 
            hover:border-sky-500
            rounded-md 
            text-base"
                >
                  Login
                </button>
              </Link>
            </div>
            <div>
              <Link to="/register">
                <p
                  className="font-[Montserrat] py-1 
            px-2 font-bold text-base hover:text-sky-500"
                >
                  Sign up
                </p>
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
