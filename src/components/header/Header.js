import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyle = "block mt-4 lg:inline-block lg:mt-0 font-bold text-gray-300 hover:text-black mr-6"
  const linksDiv = useRef(null)

  const toggleMenu = () => {
    if (! linksDiv.current) {
      return
    }

    linksDiv.current.classList.toggle('hidden')
  }

  return (
    <header>
      <nav className="flex flex-wrap p-6 shadow-sm items-center justify-between">
        <div className="flex text-dark mr-6">
          <NavLink to="/movies" className="text-xl flex-none md:justify-center">
            <img src="/logo192.png" className="h-6 w-full" alt="Website icon" />
          </NavLink>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu}
                  className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600
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
          <div ref={linksDiv} className="hidden text-sm lg:flex-grow lg:block">
            <NavLink to="/movies" className={navLinkStyle}>Home</NavLink>
            <NavLink to="/favorites" className={navLinkStyle}>Favorites</NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}


export default Header
