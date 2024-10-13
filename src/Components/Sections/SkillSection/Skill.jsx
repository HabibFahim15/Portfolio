import { FaReact,FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
const Skill = () => {
  return (
    <div>
       <div className="grid mt-6 grid-cols-2 gap-6 rounded-lg bg-indigo-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">
      
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white sm:text-2xl md:text-6xl"><FaReact /></div>
        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">React</div>
      </div>

      
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white sm:text-2xl md:text-6xl"><SiMongodb /></div>
        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">MongoDB</div>
      </div>

      
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white sm:text-2xl md:text-6xl"><SiExpress /></div>
        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">Express.js</div>
      </div>

      
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white sm:text-2xl md:text-6xl"><FaNodeJs /></div>
        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">Node.js</div>
      </div>
    </div>
  </div>
  );
};

export default Skill;