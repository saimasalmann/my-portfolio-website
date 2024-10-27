// import { AiFillLinkedin ,AiFillYoutube ,AiFillFacebook,AiOutlineWhatsApp, }from "react-icons/ai";
// import Link from 'next/link'
// import React from 'react'
// import { FaFacebook,FaYoutube,FaWhatsappSquare   } from "react-icons/fa";
// function Footer() {
//   return (
    
//         <footer className="text-gray-600 body-font bg-blue-100">
//   <div className="container mx-auto  py-5 items-center flex flex-wrap md:flex-row md:mb-0 md:mt-0flex-col">
//   <Link href='#' className="flex title-font font-medium items-center text-orange-400 mb-4 md:mb-0">
// <span className="ml-3 text-xl"><span  className='shadow-md text-white  border-orange-800 px-2 bg-orange-400 mr-1'>P</span>ortfolio Website</span>
//           </Link>

   
//        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
//       © 2024 copy rights reserved.
      
//     </p>
//     <span className=" mx-auto inline-flex  sm:mt-0 mt-4 justify-center  md:justify-center gap-3 ">
//   <Link href='#'><AiFillFacebook className="h-6 w-6 bg-white text-blue-700 rounded-3xl"/>
//   </Link>
//   <Link href='#'><AiFillLinkedin className="h-6 w-6 bg-white text-blue-700 rounded-3xl" /></Link>
//   <Link href='#'><AiFillYoutube  className="h-6 w-6 bg-white text-red-600 rounded-lg "/></Link>
//   <Link href='#'><AiOutlineWhatsApp className="h-6 w-6 bg-green-500 text-white rounded-md"/></Link>
    
//     </span>
//   </div>
// </footer>

      
    
//   )
// }

// export default Footer





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