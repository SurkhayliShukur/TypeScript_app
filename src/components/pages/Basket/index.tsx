import React from "react"
import Layout from "../../layout/Layout"
import {
  getTotalPrice,
  getTotalDiscount,
  getBasket,
  clearBasket,
  increament,
  decrement,
  removeFromCard
} from "../../../redux/slices/productSlice"
import { useSelector, useDispatch } from "react-redux"
import { FaTrashCan, FaSquarePlus, FaSquareMinus } from "react-icons/fa6";
import { copyColorCode } from "../../../utils/CopyColor";

const Basket: React.FC = () => {
  const dispatch = useDispatch()
  const totalPrice = useSelector(getTotalPrice)
  const totalDiscount = useSelector(getTotalDiscount)
  const basket = useSelector(getBasket)
  return (
    <>
      <Layout>
        <header className="flex justify-center items-center bg-slate-700 p-2 w-full">
          <div>
            <p className="text-cyan-100">TotalPrice:{totalPrice}</p>
            <p className="text-cyan-100">TotalDiscount:{totalDiscount}</p>
          </div>

          <div className="ms-8">
            <p className="text-cyan-100">Sum:{totalPrice - totalDiscount}</p>
            <button
              className="text-sky-100 mt-1 bg-gega-red px-2 py-1 rounded-sm  hover:opacity-70 transition-all duration-500"
              onClick={() => dispatch(clearBasket())}
            >
              Clear All
            </button>
          </div>
        </header>
        <div className="container  grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-14 ">
          {basket && basket.length > 0 ? (
            basket.map((product) => {
              const result = product.price - product.discountPrice;
              return (
                <div className="w-full max-w-sm bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img
                    className="w-full h-60 object-cover rounded-t-lg"
                    src={product.image}
                    alt={product.title}
                  />

                  <div className="px-5 py-5 flex justify-between items-center ">
                    <div>
                      <h3 className="text-cyan-300">{product.title}</h3>
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.description}
                      </h5>
                      <div className="flex items-center mt-2 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse text-cyan-300">
                          {product.category}
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                          {product.rating}
                        </span>
                      </div>
                      <div className="flex  items-center justify-between">
                        <p className="flex flex-col items-center justify-between">
                          <span className="text-lg font-bold  text-gray-900 dark:text-white">
                            Price: ${product.price}
                          </span>
                          <span className="text-lg font-bold text-gray-900 dark:text-white">
                            Now: ${result}
                          </span>
                          <span className="text-lg font-semibold text-gray-900 dark:text-sky-200">
                            ${(result * product.amount).toFixed(2)}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col  items-center justify-center cursor-pointer ">
                      <div
                        className="h-8 w-20 rounded"
                        style={{ backgroundColor: product.color }}
                        onClick={() => copyColorCode(product.color)}
                      ></div>

                      <div className="my-4 flex items-center">
                        <button
                          className="text-red-300"
                          onClick={() => dispatch(decrement(product))}
                        >
                          <FaSquareMinus size={30} />
                        </button>
                        <p className="text-cyan-300 font-extrabold text-xl mx-2">
                          {product.amount}
                        </p>

                        <button
                          className=" text-green-300"
                          onClick={() => dispatch(increament(product))}
                        >
                          <FaSquarePlus size={30} />
                        </button>
                      </div>

                      <button
                        className="px-7 py-1 bg-red-700 rounded-md  hover:opacity-70 transition-all duration-500"
                        onClick={() => dispatch(removeFromCard(product))}
                      >
                        <FaTrashCan size={25} color={"white"} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="text-red-200 text-5xl">Empty</h1>
          )}
        </div>
      </Layout>
    </>
  )
}

export default Basket