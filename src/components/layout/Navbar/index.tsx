import { Link, useLocation } from "react-router-dom"
import { ROUTER } from "../../../constant/Router"
import { activeLink } from "../../../utils/ActiveLink"

const Navbar: React.FC = () => {
  const { pathname } = useLocation()
  return (
    <>
      <div className="p-6 bg-gray-800 text-gray-200 text-xl font-poppins capitalize">
        <div className="flex justify-center items-center">
          <span className=" hover:text-blue-400 transition duration-500 text-3xl">
            <Link
              to={ROUTER.Home}
              className={activeLink(ROUTER.Home, pathname)
                ? "text-gega-red hover:text-sky-600    dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
                : "text-sky-600 hover:text-gega-red   dark:text-sky-200   dark:hover:text-green-200 transition duration-500"}
            >
            Table
            </Link>
          </span>
          <span className="hover:text-blue-400 transition duration-500 text-3xl mx-4">
            <Link
            to={ROUTER.Add}
            className={activeLink(ROUTER.Add, pathname)
              ? "text-gega-red hover:text-sky-600    dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
              : "text-sky-600 hover:text-gega-red   dark:text-sky-200   dark:hover:text-green-200 transition duration-500"}
            >
              Add
            </Link>
          </span>
          <span className="hover:text-blue-400 transition duration-500 text-3xl mx-4">
          <Link
            to={ROUTER.Product}
            className={activeLink(ROUTER.Product, pathname)
              ? "text-gega-red hover:text-sky-600    dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
              : "text-sky-600 hover:text-gega-red   dark:text-sky-200   dark:hover:text-green-200 transition duration-500"}
            >
              Product
            </Link>
          </span>
        </div>

      </div>
    </>
  )
}

export default Navbar