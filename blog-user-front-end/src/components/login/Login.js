import { useNavigate } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <h1 className=" font-[PaytoneOne] mt-6 text-4xl font-bold text-indigo-500 text-center">
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
          <form action="" method="POST" className="mt-8 text-sm md:text-lg">
            <div className="relative">
              <input
                id="email"
                type="email"
                name="email"
                required=""
                placeholder="Email address"
                className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-indigo-600 placeholder-transparent
                invalid:border-pink-500 
                invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <label
                for="email"
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
                required=""
                type="text"
                placeholder="Enter your password"
                className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-indigo-600 placeholder-transparent"
              />
              <label
                for="password"
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
                className="
              font-extrabold
              font-[Montserrat]
              bg-sky-500 
              p-2 rounded-md 
              text-white
              w-full 
              text-base 
              hover:bg-sky-600 
              hover:border-sky-600
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
    </>
  );
};

export default Login;
