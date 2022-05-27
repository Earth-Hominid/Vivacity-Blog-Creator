import React from 'react';

const Hero = () => {
  return (
    <>
      <section className=" bg-[#FAF5ED] pt-2 w-full h-full pb-10">
        <div className="pt-10 mx-4 text-center lg:mx-20 xl:mx-40">
          <h1 className="text-6xl font-[PaytoneOne] text-[#2A2F3D]">
            Welcome to our corner of the internet!
          </h1>
        </div>
        <div className="pt-10 mx-4 text-2xl font-[Montserrat] text-[#2A2F3D] font-bold text-center lg:mx-20 xl:mx-40">
          <h2>
            Quickly produce and publish your blog with pre-built UI that
            connects to your own personal Database.
          </h2>
        </div>
      </section>
    </>
  );
};

export default Hero;
