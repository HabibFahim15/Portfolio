import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto max-w-screen-2xl px-2">
      <header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">

        {/* Logo */}
        <a href="/" className="inline-flex items-center gap-2.5 text-xl font-bold dark:text-white md:text-2xl" aria-label="logo">
          <img
            width="95" height="94"
            src="https://i.ibb.co.com/XXZSbL8/istockphoto-1193846087-612x612-removebg-preview.png"
            alt="Logo"
          />
          Habib Hossain
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden gap-12 lg:flex">
          <a href="#" className="text-lg font-semibold text-amber-300 active:text-amber-300">Home</a>
          <a href="#" className="text-lg font-semibold dark:text-white transition duration-100 hover:text-amber-200 active:text-amber-300">Features</a>
          <a href="#" className="text-lg font-semibold dark:text-white transition duration-100 hover:text-amber-200 active:text-amber-300">Pricing</a>
          <a href="#" className="text-lg font-semibold dark:text-white transition duration-100 hover:text-amber-200 active:text-amber-300">About</a>
        </nav>

        {/* Contact Sales Button */}
        <a href="#" className="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-bold text-black no-underline align-middle bg-yellow-500 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-yellow-600 hover:border-yellow-600 hover:text-black focus-within:bg-yellow-600 focus-within:border-yellow-600">
          Hire Me
        </a>

      </header>
    </div>
  );
}

export default Navbar;
