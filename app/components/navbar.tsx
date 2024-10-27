'use client'
import { MdDownloadForOffline } from "react-icons/md";

import Link from "next/link";
import React from "react";



const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <header className="text-white bg-black ">
        <div className="container mx-auto  py-5 flex flex-wrap items-center flex-col md:flex-row ">
          
            <span className="text-orange-700 ml-3 text-xl font-semibold ">
              <span className="shadow-md text-white  border-orange-100 px-2 bg-orange-700 mr-1">
                P
              </span>
              ortfolio Website
            </span>
          
          <nav className="mx-auto font-bold flex flex-wrap items-center  justify-center">
            <Link
              href="/"
              className="mr-5 hover:text-orange-500  "
            >
              HOME
            </Link>
            <Link
              href="#about"
              className="mr-5 hover:text-orange-500  "
            >
              ABOUT ME
            </Link>
            <Link
              href="#skills"
                className="mr-5 hover:text-orange-500 "
              >
              SKILLS
            </Link>
            <Link
              href="#projects"
              className="mr-5 hover:text-orange-500 "
              >
              PROJECTS
            </Link>
            <Link
              href="#contact"
              className="mr-5 hover:text-orange-500 "
            >
              CONTACT ME
            </Link>
          </nav>
          <Link href="">
          <button className="mx-auto inline-flex font-medium font-serif items-center text-white bg-orange-700 border-spacing-2 shadow-md  py-1 px-3  hover:bg-orange-500 rounded mt-4 md:mt-0 lg:mr-2">
            Download CV
            <MdDownloadForOffline className="ml-3 size-5" />
          </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
