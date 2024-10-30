'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import avatar from "../public/—Pngtree—business women avatar_17163554.png"

function About() {
  return (
    <div id='about'>
      <section className="text-white body-font bg-black min-h-screen">
        <div className="container mx-auto flex px-5 py-40 md:flex-row flex-col items-center">
          <div className="lg:max-w-sm lg:w-full md:w-1/2 w-3/6 mb-10 md:mb-0">
            
            <Image
              className="object-cover object-center  w-full h-full  "
              alt="Profile Pic"
              src={avatar}
              width={400}
              height={300}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-700">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              I hold a masters degree in Islamic Studies and got third
              position.I did my Inter with pre-Engineering .I taught in many
              schools for a long as a mathematics teacher and polished my
              analytical and logical skills.Currently, I am honing my skills in
              web development with a focus on TypeScript, HTML, and CSS, and I am
              diving into Next.js. I enjoy creating projects that reflect my
              diverse interests and unique perspective. Thank you for visiting
              my portfolio!
            </p>
            <div className="flex justify-center">
              <Link href='#'>
              <button  className="inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg">
                View CV
              </button>
              </Link> 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
