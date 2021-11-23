const Header = () => {
  return (
    <header>
      <nav className="flex flex-wrap p-6 shadow-sm items-center justify-between">
        <div className="flex text-dark mr-6"> {/* Brand Icon/Name */}
          <a href="/" className="text-xl ml-4">AlloMovie</a>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600
                             hover:text-gray-300 hover:border-gray-400"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg className="hidden stroke-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Close Menu</title>
              <path className="" d="M0 0l20 20m0 -20l-20 20" />
            </svg>
          </button>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-black mr-6">Home</a>
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-black mr-6">Favorites</a>
          </div>
        </div>
      </nav>
    </header>
  )
}


export default Header
