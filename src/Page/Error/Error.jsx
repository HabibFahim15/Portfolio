
const Error = () => {
  return (
    <div className="dark:bg-[#1f3434] min-h-screen flex items-center justify-center py-12 px-4">
    <div className="mx-auto max-w-screen-lg grid gap-8 sm:grid-cols-2">
      <div className="flex flex-col items-center justify-center sm:items-start text-center sm:text-left">
        <p className="mb-4 text-sm font-semibold uppercase text-amber-300 md:text-base">Error 404</p>
        <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Page not found</h1>
        <p className="mb-8 text-lg text-gray-300">The page you're looking for doesn't exist.</p>
  
        <a href="/" className="inline-block rounded-lg bg-amber-300 px-8 py-3 text-sm font-semibold text-black transition duration-100 hover:bg-amber-400">
          Go home
        </a>
      </div>
      <div className="relative h-80 overflow-hidden rounded-lg shadow-lg md:h-auto">
        <img src="https://images.unsplash.com/photo-1590642916589-592bca10dfbf?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Error page image" className="absolute inset-0 h-full w-full object-cover object-center" />
      </div>
    </div>
  </div>
  
  );
};

export default Error;