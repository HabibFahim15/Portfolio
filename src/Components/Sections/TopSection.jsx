import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
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
            <a href="#" className="inline-block rounded-lg bg-[#F65A8A] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-[#85203f] focus-visible:ring active:bg-indigo-700 md:text-base">Download CV</a>
          </div>
        </Fade>
      </div>

      <Fade direction="right" className="md:h-40 overflow-hidden rounded-full md:p-10 p-4 md:border-[40px] border-[24px] border-[#2ACEB6] shadow-xl  lg:h-auto xl:w-[54%]">
        
        <img src="https://i.ibb.co.com/Qcpz9Rk/Untitled-design-1.png" loading="lazy" alt="Photo by Fakurian Design" className="h-full w-full rounded-full " />
      
      </Fade>

    </section>
  );
};

export default TopSection;