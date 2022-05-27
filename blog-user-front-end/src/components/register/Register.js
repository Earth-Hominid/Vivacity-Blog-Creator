import React from 'react';

const Register = () => {
  return (
    <>
      <section className="h-screen bg-slate-100">
        <h1 className="px-2 pt-8 mb-4 text-4xl font-[PaytoneOne] selection:font-bold text-[#2A2F3D] text-center">
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
            <form
              action=""
              method="POST"
              className="mt-6 text-sm md:text-base "
            >
              <div className="relative">
                <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  required=""
                  min="1"
                  max="50"
                  placeholder="Firstname"
                  className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-indigo-500 placeholder-transparent
                invalid:border-pink-500 
                invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
                <label
                  for="first_name"
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
                  min="1"
                  max="50"
                  type="text"
                  placeholder="Lastname"
                  className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-indigo-500 placeholder-transparent"
                />
                <label
                  for="last_name"
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
                  placeholder="Username"
                  className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-indigo-500 placeholder-transparent
                invalid:border-pink-500 
                invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
                <label
                  for="email"
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
                  id="username"
                  name="username"
                  required=""
                  type="text"
                  min="8"
                  placeholder="Username"
                  className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-indigo-500 placeholder-transparent"
                />
                <label
                  for="username"
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
                  Username
                </label>
              </div>
              <div className="mt-4 relative">
                <input
                  id="password"
                  name="password"
                  required=""
                  type="password"
                  min="3"
                  max="15"
                  placeholder="Password"
                  className="peer h-10 w-full border-b-2 border-slate-400 focus:outline-none focus:border-indigo-500 placeholder-transparent"
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
              <div className="mt-6 mb-12">
                <button
                  className="bg-indigo-500 p-2 rounded-md text-white w-full text-base hover:bg-white
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
