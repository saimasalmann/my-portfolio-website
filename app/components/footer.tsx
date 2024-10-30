
import { AiFillLinkedin, AiFillYoutube, AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai";
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="text-orange-700 body-font bg-black">
      <div className="container mx-auto  py-5 flex flex-wrap items-center flex-col md:flex-row ">
      <span className="text-orange-700 ml-3 text-xl font-semibold ">
              <span className="shadow-md text-white  border-orange-100 px-2 bg-orange-700 mr-1">
                P
              </span>
              ortfolio Website
            </span>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4  sm:border-gray-200  sm:mt-0 mt-4">
          © 2024 copy rights reserved.
        </p>

        <span className="mx-auto inline-flex  mt-4 gap-5 lg:mr-8 ">
          <Link href="https://www.linkedin.com/in/saima-salman/"  target='blank' aria-label="LinkedIn" >
            <AiFillLinkedin className="h-6 w-6 bg-white text-blue-700 rounded-md  hover:text-blue-500" />
          </Link>
          <Link href="https://www.youtube.com/watch?v=YWJdoip9CV4" target="blank" aria-label="YouTube">
            <AiFillYoutube className="h-6 w-6 bg-white text-red-600 rounded-md hover:text-red-400" />
          </Link>
          <Link href="#" aria-label="WhatsApp">
            <AiOutlineWhatsApp className="h-6 w-6 bg-green-500 text-white rounded-md  hover:bg-green-300" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <AiFillFacebook className="h-6 w-6 bg-white text-blue-700 rounded-md hover:text-blue-500" />
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;