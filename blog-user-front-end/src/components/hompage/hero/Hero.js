import React from 'react';

const Hero = () => {
  return (
    <>
      <section className=" bg-[#FAF5ED] pt-2 w-full h-screen pb-10">
        <div className="pt-5 mx-10 text-center lg:mx-20 xl:mx-40">
          <h1 className="text-5xl lg:text-6xl font-[PaytoneOne] text-[#2A2F3D]">
            Welcome to our corner of the internet!
          </h1>
        </div>
        <div className="pt-10 mx-20 lg:mx-30 xl:mx-40">
          <h2 className="text-xl font-[Montserrat] text-center text-[#2A2F3D] font-bold">
            Quickly produce and publish your blog with pre-built UI that
            connects to your own personal Database.
          </h2>
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="
          text-lg 
          font-bold 
          font-[Montserrat] mx-2 
          bg-sky-500 
          p-3 
          rounded-md 
          text-white 
          border-2 
          border-sky-500
          hover:bg-[#FAF5ED]
          hover:text-sky-500"
          >
            Already a member?
          </button>
          <button
            className="
          text-lg 
          font-bold
          font-[Montserrat]
          mx-2
          py-3
          px-6
          border-2
          border-indigo-500
          rounded-lg
          text-indigo-500
          hover:bg-indigo-500
          hover:text-white"
          >
            Register
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
