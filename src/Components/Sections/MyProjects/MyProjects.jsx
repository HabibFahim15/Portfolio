import { Fade } from "react-awesome-reveal";
import { FaNode, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { Link } from "react-router-dom";
const MyProjects = () => {
  return (
    <section id="project" className="mx-auto max-w-screen-2xl px-4 md:px-8">
      {/* first project start */}
      <div className="mb-12 flex flex-wrap justify-around md:mb-20">
        <div className="mb-6 flex w-full  flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <Fade
            damping={1}
            direction="down"
            className="mb-4 text-2xl font-bold md:text-slate-300 sm:text-4xl md:mb-3 md:text-6xl"
          >
            Met Office
          </Fade>

          <Fade
            damping={1}
            direction="up"
            className="max-w-md leading-relaxed text-gray-400 xl:text-lg mb-4 "
          >
            A role-based internal office management system for employees, HR
            executives, and administrators. Key features include account
            registration, individual dashboards, task tracking, and salary
            management. HR verifies employees and processes monthly salaries.
            Admins have full control—managing users, promoting employees to HR,
            and firing users when needed.
          </Fade>
          <div className="grid md:grid-cols-3 gap-2">
            <Fade damping={1} direction="up">
              <Link
                to={"https://react.dev/"}
                target="_blank"
                className="border-0 bg-[#58C4DC] rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 font-semibold "
              >
                <FaReact /> React.js
              </Link>
            </Fade>
            <Fade damping={1} direction="up">
              <Link
                to={"https://nodejs.org/en"}
                target="_blank"
                className="border rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 text-[#7BB863] font-semibold"
              >
                {" "}
                <FaNode /> Node.js
              </Link>
            </Fade>
            <Fade damping={1} direction="up">
              <Link
                to={"https://www.mongodb.com/"}
                target="_blank"
                className="border-0 bg-[#119250] rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 font-semibold"
              >
                <SiMongodb /> MongoDb
              </Link>
            </Fade>
            <Fade damping={1} direction="down">
              <Link
                to={"https://tailwindcss.com/docs/installation"}
                target="_blank"
                className="border rounded-3xl px-4 py-1 flex items-center text-[#38BDF8] justify-center gap-1 font-semibold"
              >
                {" "}
                <RiTailwindCssFill /> Tailwind CSS
              </Link>
            </Fade>
            <Fade damping={1} direction="down">
              <Link
                to={"https://firebase.google.com/"}
                target="_blank"
                className="border-0 bg-[#FFCA2A] rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 font-semibold"
              >
                <IoLogoFirebase /> Firebase
              </Link>
            </Fade>
          </div>

          <div className="w-64 mt-4 flex gap-4 justify-start">
            <a
              href="https://assignment-12-88347.web.app/"
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">Live Link</span>
            </a>
            <a
              href="https://github.com/HabibFahim15/assignment-12-client"
              className="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
              </span>
              <span className="relative text-white">Github</span>
            </a>
          </div>
        </div>

        <div className="mb-12 flex w-full  md:mb-16 lg:w-1/2">
          <Fade
            damping={1}
            direction="left"
            className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0"
          >
            <img
              src="https://i.ibb.co.com/w4yhCs0/Met-Office.png"
              loading="lazy"
              alt="Photo by Kaung Htet"
              className="h-full w-full p-2 object-cover object-center"
            />
          </Fade>

          <Fade
            damping={1}
            direction="right"
            className="overflow-hidden rounded-lg bg-gray-100 shadow-lg"
          >
            <img
              src="https://i.ibb.co.com/PgrZc5h/Met-Office-1.png"
              loading="lazy"
              alt="Photo by Manny Moreno"
              className="h-full p-2 w-full object-cover object-center"
            />
          </Fade>
        </div>
      </div>
      {/* 2nd Project start*/}
      <div className="mb-12 flex flex-wrap md:flex-row-reverse justify-around md:mb-20">
        <div className="mb-6 flex w-full  flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <Fade
            damping={1}
            direction="down"
            className="mb-4 text-2xl font-bold dark:md:text-cyan-400 sm:text-4xl md:mb-3 md:text-6xl"
          >
            Tour Asia
          </Fade>

          <Fade damping={1} direction="up">
            <p className="max-w-md leading-relaxed text-gray-400 xl:text-lg mb-4 ">
              Tour Asia is a user-friendly travel website that showcases top
              destinations in Asia, offering travel itineraries, tourist
              information, and user reviews. Built with React.js and styled with
              Tailwind CSS, it ensures a seamless experience for travelers. Key
              technologies include Firebase for authentication and Google Maps
              integration for location services.
            </p>
          </Fade>
          <div className="grid md:grid-cols-3 gap-2">
            <Fade damping={1} direction="up">
              <Link
                to={"https://react.dev/"}
                target="_blank"
                className="border-0 bg-[#58C4DC] rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 font-semibold "
              >
                <FaReact /> React.js
              </Link>
            </Fade>
            <Fade damping={1} direction="up">
              <Link
                to={"https://nodejs.org/en"}
                target="_blank"
                className="border rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 text-[#7BB863] font-semibold"
              >
                {" "}
                <FaNode /> Node.js
              </Link>
            </Fade>
            <Fade damping={1} direction="up">
              <Link
                to={"https://www.mongodb.com/"}
                target="_blank"
                className="border-0 bg-[#119250] rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 font-semibold"
              >
                <SiMongodb /> MongoDb
              </Link>
            </Fade>
            <Fade damping={1} direction="down">
              <Link
                to={"https://tailwindcss.com/docs/installation"}
                target="_blank"
                className="border rounded-3xl px-4 py-1 flex items-center text-[#38BDF8] justify-center gap-1 font-semibold"
              >
                {" "}
                <RiTailwindCssFill /> Tailwind CSS
              </Link>
            </Fade>
            <Fade damping={1} direction="down">
              <Link
                to={"https://firebase.google.com/"}
                target="_blank"
                className="border-0 bg-[#FFCA2A] rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 font-semibold"
              >
                <IoLogoFirebase /> Firebase
              </Link>
            </Fade>
          </div>
          <div className="w-64 mt-4 flex gap-4 justify-start">
            <a
              href="https://assingment-10-a996f.web.app/"
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">Live Link</span>
            </a>
            <a
              href="https://github.com/HabibFahim15/assignment-10-client"
              className="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
              </span>
              <span className="relative text-white">Github</span>
            </a>
          </div>
        </div>

        <div className="mb-12 flex w-full  md:mb-16 lg:w-1/2">
          <Fade
            damping={1}
            direction="left"
            className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0"
          >
            <img
              src="https://i.ibb.co.com/zGtDY6Z/Tour-Asia.png"
              loading="lazy"
              alt="Photo by Kaung Htet"
              className="h-full w-full p-2 object-cover object-center"
            />
          </Fade>

          <Fade
            damping={1}
            direction="right"
            className="overflow-hidden rounded-lg bg-gray-100 shadow-lg"
          >
            <img
              src="https://i.ibb.co.com/ggBk0TV/Tour-Asia-1.png"
              loading="lazy"
              alt="Photo by Manny Moreno"
              className="h-full p-2 w-full object-cover object-center"
            />
          </Fade>
        </div>
      </div>
      {/* 3rd Project start */}
      <div className="mb-12 flex flex-wrap justify-around md:mb-16">
        <div className="mb-6 flex w-full  flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <Fade
            direction="down"
            className="mb-4 text-2xl font-bold md:text-orange-400 sm:text-4xl md:mb-3 md:text-6xl"
          >
            Supreme Gadget
          </Fade>

          <Fade
            direction="up"
            className="max-w-md leading-relaxed text-gray-400 xl:text-lg mb-4 "
          >
            Supreme Gadgets is a dynamic e-commerce platform showcasing the
            latest in gadget technology. Built with React.js for a responsive UI
            and powered by MongoDB for robust data management, it provides users
            with an engaging shopping experience. The site features product
            listings, user reviews, and secure checkout options.
          </Fade>
          <div className="grid md:grid-cols-3 gap-2">
            <Fade damping={1} direction="up">
              <Link
                to={"https://react.dev/"}
                target="_blank"
                className="border-0 bg-[#58C4DC] rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 font-semibold "
              >
                <FaReact /> React.js
              </Link>
            </Fade>
            <Fade damping={1} direction="up">
              <Link
                to={"https://nodejs.org/en"}
                target="_blank"
                className="border rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 text-[#7BB863] font-semibold"
              >
                {" "}
                <FaNode /> Node.js
              </Link>
            </Fade>
            <Fade damping={1} direction="up">
              <Link
                to={"https://www.mongodb.com/"}
                target="_blank"
                className="border-0 bg-[#119250] rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 font-semibold"
              >
                <SiMongodb /> MongoDb
              </Link>
            </Fade>
            <Fade damping={1} direction="down">
              <Link
                to={"https://tailwindcss.com/docs/installation"}
                target="_blank"
                className="border rounded-3xl px-4 py-1 flex items-center text-[#38BDF8] justify-center gap-1 font-semibold"
              >
                {" "}
                <RiTailwindCssFill /> Tailwind CSS
              </Link>
            </Fade>
            <Fade damping={1} direction="down">
              <Link
                to={"https://firebase.google.com/"}
                target="_blank"
                className="border-0 bg-[#FFCA2A] rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 font-semibold"
              >
                <IoLogoFirebase /> Firebase
              </Link>
            </Fade>
          </div>
          <div className="w-64 mt-4 flex gap-4 justify-start">
            <a
              href="https://supreme-gadgets-ab56c.web.app/"
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">Live Link</span>
            </a>
            <a
              href="https://github.com/HabibFahim15/Supreme-Gadgets-client"
              className="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
              </span>
              <span className="relative text-white">Github</span>
            </a>
          </div>
        </div>

        <div className="mb-12 flex w-full  md:mb-16 lg:w-1/2">
          <Fade
            direction="down"
            className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0"
          >
            <img
              src="https://i.ibb.co.com/Q96p96M/Supreme-Gadgets.png"
              loading="lazy"
              alt="Photo by Kaung Htet"
              className="h-full w-full p-2 object-cover object-center"
            />
          </Fade>

          <Fade
            direction="right"
            className="overflow-hidden rounded-lg bg-gray-100 shadow-lg"
          >
            <img
              src="https://i.ibb.co.com/vVTTrkz/Supreme-Gadgets-1.png"
              loading="lazy"
              alt="Photo by Manny Moreno"
              className="h-full p-2 w-full object-cover object-center"
            />
          </Fade>
        </div>
      </div>
      {/* 4th Project end */}
      <div className="mb-12 flex flex-wrap md:flex-row-reverse justify-around md:mb-20">
        <div className="mb-6 flex w-full  flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <Fade
            direction="right"
            className="mb-4 text-2xl font-bold md:text-red-500 sm:text-4xl md:mb-3 md:text-6xl"
          >
            Lx Moto
          </Fade>

          <Fade
            direction="left"
            className="max-w-md leading-relaxed text-gray-400 xl:text-lg mb-4 "
          >
            LX Moto is an innovative motorcycle website that showcases a wide
            range of motorcycle models and accessories. It offers detailed
            specifications, reviews, and user-friendly navigation to help
            enthusiasts find their perfect ride. Built with modern web
            technologies, LX Moto provides a visually appealing and responsive
            experience for all users.
          </Fade>
          <div className="grid md:grid-cols-3 gap-2">
            <Fade damping={1} direction="up">
              <Link
                to={"https://react.dev/"}
                target="_blank"
                className="border-0 bg-[#58C4DC] rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 font-semibold "
              >
                <FaReact /> React.js
              </Link>
            </Fade>
            <Fade damping={1} direction="up">
              <Link
                to={"https://nodejs.org/en"}
                target="_blank"
                className="border rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 text-[#7BB863] font-semibold"
              >
                {" "}
                <FaNode /> Node.js
              </Link>
            </Fade>
            <Fade damping={1} direction="up">
              <Link
                to={"https://www.mongodb.com/"}
                target="_blank"
                className="border-0 bg-[#119250] rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 font-semibold"
              >
                <SiMongodb /> MongoDb
              </Link>
            </Fade>
            <Fade damping={1} direction="down">
              <Link
                to={"https://tailwindcss.com/docs/installation"}
                target="_blank"
                className="border rounded-3xl px-4 py-1 flex items-center text-[#38BDF8] justify-center gap-1 font-semibold"
              >
                {" "}
                <RiTailwindCssFill /> Tailwind CSS
              </Link>
            </Fade>
            <Fade damping={1} direction="down">
              <Link
                to={"https://firebase.google.com/"}
                target="_blank"
                className="border-0 bg-[#FFCA2A] rounded-3xl px-4 py-1 flex items-center  justify-center gap-1 font-semibold"
              >
                <IoLogoFirebase /> Firebase
              </Link>
            </Fade>
          </div>
          <div className="w-64 mt-4 flex gap-4 justify-start">
            <a
              href="https://lx-moto.web.app/"
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">Live Link</span>
            </a>
            <a
              href="https://github.com/HabibFahim15/Lxmoto-client"
              className="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
              </span>
              <span className="relative text-white">Github</span>
            </a>
          </div>
        </div>

        <div className="mb-12 flex w-full  md:mb-16 lg:w-1/2">
          <Fade
            direction="left"
            className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0"
          >
            <img
              src="https://i.ibb.co.com/gM1txBk/Lx-Moto.png"
              loading="lazy"
              alt="Photo by Kaung Htet"
              className="h-full w-full p-2 object-cover object-center"
            />
          </Fade>

          <Fade
            direction="down"
            className="overflow-hidden rounded-lg bg-gray-100 shadow-lg"
          >
            <img
              src="https://i.ibb.co.com/cL3GVyY/Lx-Moto-1.png"
              loading="lazy"
              alt="Photo by Manny Moreno"
              className="h-full p-2 w-full object-cover object-center"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
