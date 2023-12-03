import React from "react";

const Banner = () => {
  return (
    <div>
      <header className=" bg-black text-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-24  md:px-10 md:py-24 lg:py-24">
          <div className="mx-auto max-w-3xl text-center  ">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl capitalize ">
              welcome to our blogs
            </h1>
            <p className="mb-3 text-sm text-[#c0bebe] sm:text-xl lg:mb-3 capitalize lead">
              start your blog today and join a community of writers and readers
              who are passionate about sharing their stories and ideas.we offer
              everythig you neet to get started ,from helpful tips and
              tutorials.
            </p>

            <a
              href="#a"
              className="mr-6 inline-block items-center rounded-md bg-green-300 px-8 py-4 text-center font-semibold text-black lg:mr-8"
            >
              Open Account
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
