import React, { useState } from "react"
import moment from "moment"
import { useNavigate } from "react-router-dom"
import { InitialStateType } from "../../../interfaces/data"
import { addProduct } from "../../../config"
import Layout from "../../layout/Layout"
import { toast } from "react-toastify"
import {SketchPicker, ColorResult} from "react-color"
import { ROUTER } from "../../../constant/Router"

const Add: React.FC = () => {

  const createDate = moment().valueOf()
  const navigate = useNavigate()

  const initialState: InitialStateType = {
    title: "",
    description: "",
    price: 0,
    discountPrice: 0,
    rating: 0,
    stock: 0,
    category: "",
    image: "",
    create_at: createDate,
    color: "#000",
  }
  const [newProduct, setNewProduct] = useState<InitialStateType>(initialState)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const numericValue = isNaN(Number(value)) ? value : Number(value);
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: numericValue
    }))
  }
  const isEmpty: boolean = Object.values(addProduct).some(
    (value) => value === "" || value === 0
  );
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmpty) {
      toast.error("Please fill in all fields", {
        autoClose: 1000,
      });
      return
    }
    try {
      await addProduct(newProduct)
      toast.success("Product added successfully!", {
        autoClose: 1000,
      });
      setNewProduct(initialState);
      setTimeout(() => {
        navigate(ROUTER.Home);
      }, 1500);
    }
    catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding Product", {
        autoClose: 1000,
      });
    }
  }
  return (
    <>
      <Layout>
        <div className="py-12">
          <form className="flex justify-center" onSubmit={handleSubmit}>
            <div className="w-1/4 mx-24">
              <div className="relative z-0 w-full mb-5 group">
                <input type="text"
                  className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  name="title"
                  value={newProduct.title}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="title"
                  className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Title
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text"
                  className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  name="description"
                  value={newProduct.description}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="description"
                  className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Description
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text"
                  className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="price"
                  className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Price
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text"
                  className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  name="discountPrice"
                  value={newProduct.discountPrice}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="discountPrice"
                  className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  DiscountPrice
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text"
                  className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  name="rating"
                  value={newProduct.rating}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="rating"
                  className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Rating
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text"
                  className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  name="stock"
                  value={newProduct.stock}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="stock"
                  className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Stock
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text"
                  className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  name="category"
                  value={newProduct.category}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="category"
                  className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Category
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text"
                  className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  name="image"
                  value={newProduct.image}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="image"
                  className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Image
                </label>
              </div>
              <button
                type="submit"
                className="text-white transition-all duration-300  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto   text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-16 py-2"
              >
                Submit
              </button>
            </div>
            <div className="w-1/4 ">
              <SketchPicker
                color={newProduct.color}
                onChange={(color: ColorResult) =>
                  setNewProduct((prevProduct) => ({
                    ...prevProduct,
                    color: color.hex,
                  }))
                }
              />
            </div>
          </form>
        </div>
      </Layout>
    </>
  )
}

export default Add