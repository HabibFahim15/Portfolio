import React from 'react';
import TopSection from '../Sections/TopSection';
import SecondSection from '../Sections/SecondSection';

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



    </>
  );
};

export default Home;