import React from "react";
import { GiSkills } from "react-icons/gi";
function Skills() {
  return (
    <section id='skills' className="text-gray-600 bg-black body-font min-h-screen p-24">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-orange-700 mb-4">
            MY SKILLS
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">
            Here are my some skills are as under.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-7 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                className="text-orange-700 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium text text-black mr-3">
                HTML
              </span>
              <div className="relative bg-gray-500 h-1 w-[300%] rounded-md">
                <div className="bg-orange-700 absolute h-full w-[100%] rounded-md"></div>
                <h4 className="text-end md:mt-4 text-orange-700">100%</h4>
              </div>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-7 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                className="text-orange-700  w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium text-black mr-3">CSS</span>
              <div className="relative bg-gray-500 h-1 w-[300%] rounded-md">
                <div className="bg-orange-700 absolute h-full w-[90%] rounded-md"></div>
                <h4 className="text-end md:mt-4 text-orange-700">90%</h4>
              </div>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-7 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                className="text-orange-700  w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium text-black mr-3">Typescript</span>
              <div className="relative bg-gray-300 h-1 w-[300%] rounded-md">
                <div className="bg-orange-700 absolute h-full w-[100%] rounded-md"></div>
                <h4 className="text-end md:mt-4 text-orange-700">100%</h4>
              </div>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-7 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                className="text-orange-700  w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium text-black mr-3">Nextjs</span>
              <div className="relative bg-gray-500 h-1 w-[300%] rounded-md ">
                <div className="bg-orange-700 absolute h-full w-[50%] rounded-md"></div>
                <h4 className="text-end md:mt-4 text-orange-700">50%</h4>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </section>


  );
}

export default Skills;
