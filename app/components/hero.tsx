'use client'

import Typewriter from 'typewriter-effect'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <div className=' bg-black min-h-screen'>
      <section >
  <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col ">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mt-20 md:mb-0  text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        I'm a </h1>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-700">  
    <Typewriter
  options={{
    strings: ['Web Developer', 'UI/UX Designer','Teacher'],
    autoStart: true,
    loop: true,
  }}
/>

      </h1>
      <div className=' w-[300px] h-1 bg-red-700 mb-5 mx-auto md:mx-0'></div>
      <p className="mb-8 leading-relaxed text-white">
      Welcome! I’m Saima, Master's in Islamic Studies and passionate for web development. My academic background has equipped me with critical thinking and analytical skills, which I now apply to the tech world.

Having recently mastered TypeScript HTML and CSS, I'm currently diving into Next.js to enhance my web development skills. I enjoy blending my analytical insights with creative problem-solving, crafting responsive and user-friendly applications.

I believe in the power of technology to connect people and ideas, and I'm excited to leverage my diverse background to contribute to innovative projects.

Feel free to explore my work and connect with me!

      </p>
      <Link href='#Contact'>        <button className="inline-flex text-white bg-red-700 hover:bg-red-800 border-0 py-2 px-6 rounded text-lg">
          Contact
        </button>
        </Link>
 
    
    </div>
         <Image className='object-cover object-center rounded w-[20rem]  lg:mr-24 '
        src={require('../public/—Pngtree—business women avatar_17163554.png')}
        alt='hero'
        height={100}
       width={100}
      />
  </div>
</section>

</div>
  )
}

export default Hero
