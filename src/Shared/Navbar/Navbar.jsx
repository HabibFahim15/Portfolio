

function Navbar() {

  return (
    <div className="mx-auto max-w-screen-2xl ">
      <header className=" flex items-center justify-between py-4  md:py-2">

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
          <a href="#" className="text-lg font-semibold hover:text-amber-400 dark:hover:text-amber-300">Home</a>
          <a href="#" className="text-lg font-semibold dark:text-white transition duration-100 hover:text-amber-400 dark:hover:text-amber-300">Features</a>
          <a href="#" className="text-lg font-semibold dark:text-white transition duration-100 hover:text-amber-400 dark:hover:text-amber-300">Pricing</a>
          <a href="#" className="text-lg font-semibold dark:text-white transition duration-100 hover:text-amber-400 dark:hover:text-amber-300">About</a>
        </nav>

        {/* Contact Sales Button */}
        <a href="" className="rounded-lg bg-[#FEC548] md:px-8 md:py-3 px-5 py-2 text-center text-lg font-bold text-slate-800  outline-none ring-[#FEC548] transition duration-100 hover:bg-[#FEC548] focus-visible:ring active:bg-amber-500 md:text-base">Hire Me</a>

      </header>
    </div>
  );
}

export default Navbar;
