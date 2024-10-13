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

      <div className='dark:bg-[#1f3434] dark:text-white'>
        kfjdlasfd <br />
        kfjdlasfd <br />
        kfjdlasfd <br />
        kfjdlasfd <br />

        kfjdlasfd <br />
        kfjdlasfd <br />
        kfjdlasfd <br />
        kfjdlasfd <br />

        kfjdlasfd <br />
      </div>

    </>
  );
};

export default Home;