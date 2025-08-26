

function Navbar() {

  return (
    <div className="mx-auto max-w-screen-2xl fixed top-0 left-0 right-0 z-50">
      <header className=" flex items-center bg-[#1F3434] px-4 justify-between py-4  md:py-2">

        {/* Logo */}
        <a href="/" className="inline-flex items-center  text-xl font-bold dark:text-white md:text-2xl" aria-label="logo">
          <img

            className="md:w-24 md:h-24 w-16 h-16"
            src="https://i.ibb.co.com/XXZSbL8/istockphoto-1193846087-612x612-removebg-preview.png"
            alt="Logo"
          />
          Habib Hossain
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden gap-12 lg:flex">
          <a href="#top" className="text-lg font-semibold hover:text-amber-400 dark:hover:text-amber-300">Home</a>
          <a href="#why" className="text-lg font-semibold dark:text-white transition duration-100 hover:text-amber-400 dark:hover:text-amber-300">Ideal choice</a>
          <a href="#project" className="text-lg font-semibold dark:text-white transition duration-100 hover:text-amber-400 dark:hover:text-amber-300">Projects</a>
          <a href="#about" className="text-lg font-semibold dark:text-white transition duration-100 hover:text-amber-400 dark:hover:text-amber-300">About me</a>
        </nav>

        {/* Contact Sales Button */}
        <a href="https://www.linkedin.com/in/habib-hossain-fahim/" className="rounded-lg bg-[#FEC548] md:px-8 md:py-3 px-5 py-2 text-center text-lg font-bold text-slate-800  outline-none ring-[#FEC548] transition duration-100 hover:bg-[#FEC548] focus-visible:ring active:bg-amber-500 md:text-base">Hire Me</a>

      </header>
    </div>
  );
}

export default Navbar;
