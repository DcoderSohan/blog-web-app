import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import images from "../../constants/images";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col p-5 mt-5 lg:flex-row">
      <div className="p-5 lg:w-1/2 space-y-4">
        <h1 className="text-4xl text-center font-Poppins font-semibold md:text-6xl lg:text-left lg:max-w-[400px]">
          Read the most interesting blogs
        </h1>
        <p className="text-dark-light text-center md:text-xl lg:text-left text-xl">
          Dive deep into the world of TrendGlobalize, where we share the latest
          trends, tips, and inspiration.
        </p>
        <div className="flex flex-col justify-center items-center gap-y-4 relative p-4 rounded-lg">
          <div className="relative w-full">
            <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
            <input
              type="text"
              placeholder="Serach Blogs"
              className="placeholder:text-dark-light
              rounded-lg pl-12 pr-3 py-3 w-full focus:outline-none shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] md:py-4"
            />
          </div>
          <button className="bg-blue-600 rounded-lg w-full px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2 hover:border-2 hover:border-blue-600 hover:bg-white hover:text-blue-600 text-white">
            Search
          </button>
        </div>
        <div className="flex flex-col lg:flex-row mt-3 lg:flex-nowrap lg:space-x-4 lg:space-y-4 lg:mt-5 lg:items-center ">
          <span className="font-semibold mt-3">Popular Tags:</span>

          <ul className="flex gap-x-5 flex-wrap text-sm mt-4">
            <li className="bg-gray-100 text-gray-500 px-2 rounded-full lg:text-start">
              Design
            </li>
            <li className="bg-gray-100 text-gray-500 px-2 rounded-full  lg:text-start">
              Sports
            </li>
            <li className="bg-gray-100 text-gray-500 px-2 rounded-full  lg:text-start">
              Entertainment
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:1/2">
        <img src={images.HeroImg} alt="Reading Blog" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
