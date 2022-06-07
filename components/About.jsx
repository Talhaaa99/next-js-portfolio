import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen flex items-center p-2 py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase tracking-widest text-xl text-blue-600 ">
            About
          </p>
          <h2 className="py-2 text-gray-700">Who is Talha?</h2>
          <p className="py-2 tracking-wide text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="py-2 tracking-wide text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="py-2 underline cursor-pointer">
            Check out some of the things I've built!
          </p>
        </div>
        <div className="p-4 w-full h-auto m-auto shadow-xl shadow-grey-300 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="/../assets/twitter_pfp.jpeg"
            alt="/"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
