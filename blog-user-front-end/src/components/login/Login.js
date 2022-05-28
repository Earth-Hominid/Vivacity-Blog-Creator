import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../../features/auth/authSlice';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';

const Login = () => {
  const [registerFormData, setRegisterFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = registerFormData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/dashboard');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setRegisterFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <section className="h-screen bg-slate-100">
        <h1 className=" font-[PaytoneOne] pt-8 text-4xl text-zinc-700 text-center">
          Welcome Back!
        </h1>
        <div className="flex w-full justify-center ">
          <div
            className="
        w-full 
        max-w-md 
        m-10 
        flex 
        justify-center
        bg-white 
        border 
        border-slate-300 
        shadow-lg
        rounded-md"
          >
            <form
              onSubmit={onSubmit}
              action=""
              method="POST"
              className="mt-8 text-sm md:text-lg"
            >
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required=""
                  placeholder="Email address"
                  className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-sky-500 placeholder-transparent
                invalid:border-pink-500 
                invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
                <label
                  htmlFor="email"
                  className="
                text-stone-800 
                absolute 
                left-0  
                -top-3.5 
                text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-600 peer-placeholder-shown:top-2 transition-all 
                peer-focus:-top-3.5
                peer-foucs:text-stone-600
                peer-focus:text-sm"
                >
                  Email address
                </label>
              </div>
              <div className="mt-8 relative">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required=""
                  type="password"
                  placeholder="Enter your password"
                  className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-sky-500 placeholder-transparent"
                />
                <label
                  htmlFor="password"
                  className="
              absolute
              left-0
              -top-3.5
              text-sm 
              text-stone-800
              transition-all
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-stone-600
              peer-placeholder-shown:top-2
              peer-focus:-top-3.5
              peer-foucs:text-stone-600
              peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
              <div className="mt-10 mb-12">
                <button
                  type="submit"
                  className="
              font-extrabold
              font-[Montserrat]
              bg-sky-500 
              p-2 rounded-md 
              text-white
              w-full 
              text-base 
              hover:bg-white
              hover:text-sky-500
              border-2
              border-sky-500
              "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
