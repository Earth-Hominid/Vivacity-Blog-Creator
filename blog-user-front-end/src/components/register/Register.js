import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../../features/auth/authSlice';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';

const Register = () => {
  const [registerFormData, setRegisterFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    alias: '',
    password: '',
    password2: '',
  });

  const { first_name, last_name, email, alias, password, password2 } =
    registerFormData;

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

    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        first_name,
        last_name,
        email,
        alias,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <section className="h-screen bg-slate-100">
        <h1 className="px-2 pt-8 mb-4 text-4xl font-[PaytoneOne] selection:font-bold text-zinc-700 text-center">
          Register below to become a member!
        </h1>
        <div className="flex w-full justify-center ">
          <div
            className="
        w-full 
        max-w-md 
        m-4
        flex 
        justify-center
        bg-white 
        border 
        border-slate-300 
        shadow-lg
        rounded-md"
          >
            <form onSubmit={onSubmit} className="mt-6 text-sm md:text-base">
              <div className="relative">
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={first_name}
                  placeholder="Firstname"
                  onChange={onChange}
                  required=""
                  min="1"
                  max="50"
                  className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-indigo-500 placeholder-transparent
                invalid:border-pink-500 
                invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
                <label
                  htmlFor="first_name"
                  className="
                text-stone-800 
                absolute 
                left-0  
                -top-3.5 
                text-sm
                md:text-base
                peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-600 peer-placeholder-shown:top-2 transition-all 
                peer-focus:-top-3.5
                peer-foucs:text-stone-600
                peer-focus:text-sm"
                >
                  Firstname
                </label>
              </div>
              <div className="mt-4 relative">
                <input
                  id="last_name"
                  name="last_name"
                  required=""
                  value={last_name}
                  onChange={onChange}
                  min="1"
                  max="50"
                  type="text"
                  placeholder="Lastname"
                  className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-indigo-500 placeholder-transparent"
                />
                <label
                  htmlFor="last_name"
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
                  Lastname
                </label>
              </div>
              <div className="mt-4 relative">
                <input
                  id="email"
                  name="email"
                  required=""
                  type="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Email"
                  className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-indigo-500 placeholder-transparent
                invalid:border-pink-500 
                invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
                <label
                  htmlFor="email"
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
                  Email
                </label>
              </div>
              <div className="mt-4 relative">
                <input
                  id="alias"
                  name="alias"
                  required=""
                  type="text"
                  min="1"
                  max="50"
                  placeholder="Alias"
                  value={alias}
                  onChange={onChange}
                  className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-indigo-500 placeholder-transparent"
                />
                <label
                  htmlFor="alias"
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
                  Alias
                </label>
              </div>
              <div className="mt-4 relative">
                <input
                  id="password"
                  name="password"
                  required=""
                  type="password"
                  value={password}
                  onChange={onChange}
                  min="3"
                  max="15"
                  placeholder="Password"
                  className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-indigo-500 placeholder-transparent"
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
              <div className="mt-4 relative">
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  value={password2}
                  onChange={onChange}
                  placeholder="Confirm password"
                  className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-indigo-500 placeholder-transparent"
                />
                <label
                  htmlFor="password2"
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
                  Confirm password
                </label>
              </div>
              <div className="mt-6 mb-12">
                <button
                  type="submit"
                  className="
                  bg-indigo-500 
                  p-2 
                  rounded-md 
                  text-white 
                  w-full 
                  text-base 
                  hover:bg-white
                  border-2
                border-indigo-500
                hover:text-indigo-500"
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

export default Register;
