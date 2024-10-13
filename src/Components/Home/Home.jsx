import React from 'react';
import TopSection from '../Sections/TopSection';
import SecondSection from '../Sections/SecondSection';
import MyProjects from '../Sections/MyProjects/MyProjects';

const Home = () => {
  return (
    <>
      <div className='dark:bg-[#1f3434]  dark:text-white'>
        <div className='max-w-screen-2xl  mx-auto '>
          <TopSection />
        </div>
      </div>

      <div className='max-w-screen-2xl  mx-auto'>
        <SecondSection />
      </div>

      <div className='dark:bg-[#1f3434] dark:text-white'>
        <div className='max-w-screen-2xl  mx-auto py-12'>
          <h1 className="text-3xl font-extrabold text-center dark:text-white  sm:text-4xl mb-4 md:mb-6 md:text-6xl">Recent <span className='text-amber-400'>Projects</span></h1>
          <p className='text-center mb-4 md:mb-8 text-gray-400'>Developed multiple responsive web apps using React, Tailwind CSS, and MongoDB, ensuring dynamic solutions.</p>
          <MyProjects />
        </div>
        
        </div>
      

    </>
  );
};

export default Home;