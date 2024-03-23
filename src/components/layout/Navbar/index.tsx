import { Link, useLocation } from "react-router-dom"
import { ROUTER } from "../../../constant/Router"
import { activeLink } from "../../../utils/ActiveLink"
import { getTotalAmount } from "../../../redux/slices/productSlice"
import { FaShopify } from "react-icons/fa";
import { useSelector } from "react-redux"
import { useGlobalContext } from "../../../Context/GlobalContext";
import { ContextProps } from "../../../interfaces/data";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const { isAdmin, loggedInUser } = useGlobalContext() as ContextProps
  const { pathname } = useLocation()
  const totalAmount = useSelector(getTotalAmount)
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setTimeout(() => {
      navigate(ROUTER.Login);
    }, 1500);
  };
  return (
    <>
      <div className="p-6 bg-gray-800 text-gray-200 text-xl font-poppins capitalize">
        <div className="flex justify-center items-center">
          {
            isAdmin && loggedInUser ? (
              <>
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
              </>
            )
              : (
                ""
              )
          }
          {!loggedInUser && (
            <span className=" hover:text-blue-400 transition duration-500 text-3xl">
              <Link
                to={ROUTER.Login}
                className={
                  activeLink(ROUTER.Login, pathname)
                    ? "text-gega-red hover:text-sky-600  mx-3  dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
                    : "text-sky-600 hover:text-gega-red  mx-3 dark:text-sky-200   dark:hover:text-green-200 transition duration-500"
                }
              >
                Login
              </Link>
            </span>
          )}
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
          <span className="hover:text-blue-400 transition duration-500 text-3xl mx-4">
            <Link
              to={ROUTER.Basket}
              className={activeLink(ROUTER.Basket, pathname)
                ? "text-gega-red hover:text-sky-600    dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
                : "text-sky-600 hover:text-gega-red   dark:text-sky-200   dark:hover:text-green-200 transition duration-500"}
            >
              <div className="flex">
                <span>
                  <FaShopify size={40} />
                </span>
                <span className="bg-red-600 h-6 w-6 text-xl rounded-full flex justify-center items-center">
                  <span> {totalAmount}</span>
                </span>
              </div>
            </Link>
          </span>
          {loggedInUser && (
          <>
            <span className=" hover:text-blue-400 transition duration-500 text-3xl">
              <Link to={ROUTER.Users}>
                <div className="flex items-center text-stone-300 text-center text-lg">
                  <img
                    className="w-[45px] h-[45px] object-cover rounded-full mx-3"
                    src={loggedInUser.image}
                    alt={loggedInUser.name}
                  />
                  <p className="font-semibold">{loggedInUser.name}</p>
                </div>
              </Link>
            </span>

            <span className=" hover:text-blue-400 transition duration-500 text-2xl">
              <button
                onClick={handleLogout}
                className="mx-4  text-sky-600 hover:text-gega-red   dark:text-sky-200   dark:hover:text-green-200 transition duration-500"
              >
                LogOut
              </button>
            </span>
          </>
        )}
        </div>

      </div>
    </>
  )
}

export default Navbar