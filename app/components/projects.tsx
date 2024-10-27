'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Projects() {
  return (
    
      <section id='projects' className="text-gray-600 body-font bg-black min-h-screen p-24">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font -mb-5 text-orange-700 ">
        MY PROJECTS
      </h1>
     
    </div>
    <div className="flex flex-wrap -mt-8">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="GIAIC Card Pic "
            className="absolute inset-0 w-full h-full object-fill object-center"
            src={require('../public/GIAIC card.png')}
            
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-xl title-font font-medium text-gray-900 mb-1">
              Dynamic Card Project
            </h2>
            <h1 className="title-font text-lg font-medium  text-orange-700 mb-3">
              GIAIC CARD
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Next.js project to generate a dynamic card consisting of user info based on user input provided. 

            </p>
            <Link href="https://dynamic-card-generation-saima-nazs-projects.vercel.app/" target='_blank'>
            <p className="leading-relaxed text-orange-700 hover:underline hover:text-orange-600" > View Project</p>
            </Link>
          </div>
        </div>
      </div>



      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="calculator pic"
            src={require("../public/simple calculator.png")}
            
            className="absolute inset-0 w-full h-full  object-center object-fill"


          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-xl title-font font-medium text-gray-900 mb-1">
              Simple Web Calculator
            </h2>
            <h1 className="title-font text-lg font-medium  text-orange-700 mb-3">
              CALCULATOR
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a simple web calculator made of using html and css only .It can add ,subtract ,multiply and divide two numbers.  

            </p>
            <Link href="https://simple-calculator-nine-alpha.vercel.app/" target='_blank'>
            <p className="leading-relaxed text-orange-700 hover:underline hover:text-orange-600" > View Project</p>
            </Link>
          </div>
        </div>
      </div>


      <div className="lg:w-1/3 sm:w-1/2  p-4">
        <div className="flex relative">
          <Image
            alt="Resume"
            className="absolute inset-0 w-full h-full object-fill object-center"
            src={require("../public/Screenshot_26-10-2024_135439_.jpeg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-xl title-font font-medium text-gray-900 mb-1">
              My Responsive Resume
            </h2>
            <h1 className="title-font text-lg font-medium  text-orange-700 mb-3">
              RESUME
            </h1>
            <p className="leading-relaxed line-clamp-2">
              It's my responsive resume using html and css only. 

            </p>
            <a href="https://responsive-resume-psi.vercel.app/" target='_blank'>
            <p className="leading-relaxed text-orange-700 hover:underline hover:text-orange-600" > View Project</p>
            </a>
          </div>
        </div>
       </div>

       

     


    </div>
  </div>
</section>


  )
}

export default Projects
