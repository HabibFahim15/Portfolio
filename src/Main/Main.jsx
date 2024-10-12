import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
  return (
    <div className='dark:bg-[#182828]  dark:text-white'>
      <div className="max-w-screen-2xl  mx-auto">
      <div>
        <Navbar />
      </div>
      <div className="max-w-screen-2xl  mx-auto  min-h-[calc(100vh-145px)]">
      <Outlet />
    </div>
      </div>
    </div>
    
  );
};

export default Main;