import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
const AboutMe = () => {
  return (
    <section id="about">
      <div class=" py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className='h-auto overflow-hidden rounded-lg bg-[#D9D9D9] shadow-lg md:h-auto'>
              <div class="h-40 overflow-hidden rounded-lg bg-[#D9D9D9] shadow-lg md:h-96">
                <img src="https://i.ibb.co.com/XSrcp0C/Fahim-Formal-dress.png" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
              </div>
              <div className='text-center py-10'>
                <h2 className='text-3xl font-bold text-gray-800'>
                   <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "I'am Habib Hossain",
                      1000,
                      "I'am from Bangladesh",
                      1000,
                      "I'am a Front-End Developer",
                      1000,
                      
                    ]}
                    wrapper="span"
                    speed={30}
                    style={{  display: 'inline-block' }}
                    repeat={Infinity}
                  /></h2>
                <p className='text-xl mb-5 font-medium text-gray-500'>+880 1763153560</p>
                <a href="mailto:habibfahim71gmail.com" className='border-none my-3 bg-black text-white px-12 py-3'>Email me</a>

                <p className="text-center mt-4 text-2xl font-semibold text-gray-800 ">Socials:</p>

                <div className="flex justify-center items-center gap-4 mt-4">
                  <a href="https://www.linkedin.com/in/habib-hossain-fahim/" target="_blank" className="text-gray-900 transition duration-100 hover:text-gray-500 active:text-gray-600">
                    <FaLinkedin className="md:w-10 md:h-10 w-8 h-8" />
                  </a>

                  <a href="https://github.com/HabibFahim15" target="_blank" className="text-gray-900 transition duration-100 hover:text-gray-500  active:text-gray-600">
                    <FaGithub className="md:w-10 md:h-10 w-8 h-8" />
                  </a>
                  <a className="text-gray-900  transition duration-100 hover:text-gray-500  active:text-gray-600" href="https://www.facebook.com/profile.php?id=61554956040146"><FaFacebook className="md:w-10 md:h-10 w-8 h-8" /></a>



                </div>



              </div>
            </div>

            <div class="md:pt-8">
  <p class="text-center font-bold text-indigo-500 md:text-left">Who am I?</p>

  <h1 class="mb-4 text-center text-2xl font-bold text-gray-400 sm:text-3xl md:mb-6 md:text-left">I am Habib Hossain</h1>

  <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
    I’m 22 years old and live in East Aladatpur, Choupolli, Sadar, Lakshmipur, Bangladesh. Currently pursuing a BA degree, I completed my HSC in 2021. Alongside my studies, I’ve grown into a passionate junior front-end developer with expertise in HTML, CSS, JavaScript, and React.
  </p>

  <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
    My journey in web development has been exciting, from creating responsive websites to working on personal projects like a tour spot website. I love solving problems through clean, efficient code and delivering user-friendly interfaces. Recently, I completed a web development course from Programming Hero, which sharpened my skills further.
  </p>

  <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
    I’m always eager to learn and adapt to new technologies, and I aim to continue growing as a developer, contributing to innovative projects that push the boundaries of web development.
  </p>
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;