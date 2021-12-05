import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-1 w-full justify-center items-center flex-col">
    <div className="flex flex-col flex-wrap items-center">
      <h5 className="text-8xl sm:text-9xl font-bold mb-8">Oops!</h5>
      <span className="text-xl font-bold">404 - PAGE NOT FOUND</span>
      <p className="text-center text-gray-600 mb-6">
        The page you are looking for might have been removed,
        had its name changed or is temporarily unavailable.
      </p>
      <Link to="/films">
        <button className="transition duration-500 ease-in-out
                           rounded-full px-6 py-3 bg-blue-500 text-white hover:bg-blue-700">
          Go to homepage
        </button>
      </Link>
    </div>
  </div>
)

export default NotFound