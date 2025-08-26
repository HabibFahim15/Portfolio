import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { FaFacebook } from "react-icons/fa";
const TopSection = () => {
  return (
    <section className="flex flex-col-reverse justify-between gap-6 p-5 md:pb-12  sm:gap-10 md:gap-16 lg:flex-row">

      <div className="flex flex-col  justify-center sm:text-center lg:py-12 lg:text-left xl:w-1/2 xl:py-24">
        <Fade direction="down">
          <p className="mb-3 font-semibold text-green-500 md:mb-6 md:text-lg xl:text-xl flex items-center"><span className="text-2xl md:text-3xl"><MdOutlineArrowRightAlt /></span> Introduce</p>
          <h1 className=" text-3xl font-bold dark:text-white sm:text-5xl  md:text-7xl">Hello</h1>
          <h1 className=" text-4xl font-bold dark:text-white sm:text-5xl mb-6 md:mb-10 md:text-8xl">I'm <span className="text-amber-400">Habib</span> Hossain</h1>
        </Fade>
        <Fade direction="up">
          <p className="mb-8 leading-relaxed dark:text-gray-300 md:mb-10 lg:w-4/5 xl:text-lg">I'm a front-end developer passionate about creating responsive, user-friendly web applications. While new to the field, I've completed projects and am now seeking opportunities to grow and contribute in a professional environment.</p>

          <div>
            <a  href="../../../assets/Jr Frontend Dev.pdf" className="inline-block rounded-lg bg-[#F65A8A] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-[#85203f] focus-visible:ring active:bg-indigo-700 md:text-base" download>Download CV</a>
          </div>
        </Fade>
        <div className="flex justify-start items-center gap-4 mt-4">
        <a href="https://www.linkedin.com/in/habib-hossain-fahim/" target="_blank" className="text-gray-400 transition duration-100 hover:text-white active:text-gray-600">
            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
  
          <a href="https://github.com/HabibFahim15" target="_blank" className="text-gray-400 transition duration-100 hover:text-white active:text-gray-600">
            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a width="24" height="24" className="text-gray-400 transition duration-100 hover:text-white active:text-gray-600" href="https://www.facebook.com/profile.php?id=61554956040146"><FaFacebook /></a>



        </div>
      </div>

      <Fade direction="right" className=" overflow-hidden rounded-[50%] md:p-10 p-4 md:border-[40px] border-[24px] border-[#2ACEB6] shadow-xl  md:h-[50%] xl:w-[54%]">
        
        <img src="https://i.ibb.co.com/Qcpz9Rk/Untitled-design-1.png" loading="lazy" alt="Photo by Fakurian Design" className="h-full w-full rounded-[50%] " />
      
      </Fade>

    </section>
  );
};

export default TopSection;