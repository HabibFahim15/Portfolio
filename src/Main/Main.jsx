import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
  return (
    <div className='dark:bg-[#182828]  dark:text-white'>
      
      <div className='dark:bg-[#1f3434]'>
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-145px)]">
      <Outlet />
    </div>
    <Footer />
    </div>
    
  );
};

export default Main;