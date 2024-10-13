import React from 'react';

const SecondSection = () => {
  return (
    <div className="max-h-screen py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-16 sm:grid-cols-2 items-center">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-lg shadow-2xl sm:h-[550px] lg:h-[650px]">
            <img
              src="https://i.ibb.co.com/smLwdcz/how-to-become-a-software-developer.webp"
              loading="lazy"
              alt="Project showcase"
              className="absolute inset-0 h-full w-full object-cover object-bottom shadow-2xl"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
            <p className="mb-4 text-sm font-semibold uppercase text-amber-400 md:text-base">Why I'm Your Ideal Choice</p>
            <h1 className="mb-4 text-center text-3xl font-bold dark:text-gray-100 sm:text-left md:text-5xl">
              Let's Transform Ideas into Reality
            </h1>
            <p className="mb-8 text-center dark:text-gray-300 sm:text-left md:text-lg">
              As a passionate front-end developer, I bring fresh perspectives and modern solutions to every project,
              ensuring responsive, cutting-edge designs tailored specifically to your vision.
            </p>

            <a href="https://www.linkedin.com/in/habib-hossain-fahim/" target='_blank' class="relative inline-flex items-center justify-start py-4 pl-4 pr-12 overflow-hidden font-semibold  transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#2ACEB6] text-white group">
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-amber-400 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg class="w-5 h-5 font-bold text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute font-bold left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative w-full text-left transition-colors font-bold duration-200 ease-in-out group-hover:text-white">Contact Me</span>
            </a>
          </div>
        </div>
      </div>
    </div>



  );
};

export default SecondSection;