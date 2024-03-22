import React, { useState, useEffect } from "react"
import moment from "moment"
import { InitialStateType } from "../../../interfaces/data"
import { updateProduct } from "../../../config/index"
import { SketchPicker, ColorResult } from "react-color"
import { ROUTER } from "../../../constant/Router"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import { useFetchSingleProduct } from "../../../common/GetSingle"



const UpdateItem: React.FC = () => {
  const createDate = moment().valueOf();
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
  const [editProduct, setEditProduct] = useState<InitialStateType>(initialState)
  const { id } = useParams()
  const navigate = useNavigate()
  const { product, loading, error } = useFetchSingleProduct(Number(id))


  const updateSingleProduct = async () => {
    try {
      await updateProduct(Number(id), editProduct)
      setEditProduct(initialState)
      toast.success("Updated successFully", {
        autoClose: 1000
      })
      setTimeout(() => {
        navigate(ROUTER.Home)
      }, 1500)
    }
    catch (error) {
      console.log(error)
    }
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const numericValue = isNaN(Number(value)) ? value : Number(value);
    setEditProduct((prevProduct) => ({
      ...prevProduct,
      [name]: numericValue
    }))
  }
  useEffect(() => {
    if (product) {
      setEditProduct(product);
    }
  }, [product]);

  if (loading) {
    return <p className="m-20 text-red-300 text-xl ">Loading...</p>;
  }

  if (error) {
    return <p className="m-20 text-red-300 text-xl ">Error: {error}</p>;
  }
  console.log(product)

  return (
    <>
      <div className="py-6">
        <h1 className="text-center text-4xl text-cyan-300 mb-6">Update Product</h1>
        <div className="flex justify-center">
          <div className="w-1/4 mx-24">
            <div className="relative z-0 w-full mb-5 group ">
              <input type="text"
                className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                name="title"
                value={editProduct.title}
                onChange={handleInputChange}
              />
              <label
                htmlFor="title"
                className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Title
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group ">
              <input type="text"
                className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                name="description"
                value={editProduct.description}
                onChange={handleInputChange}
              />
              <label
                htmlFor="description"
                className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Title
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group ">
              <input type="text"
                className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                name="price"
                value={editProduct.price}
                onChange={handleInputChange}
              />
              <label
                htmlFor="price"
                className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Title
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group ">
              <input type="text"
                className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                name="discountPrice"
                value={editProduct.discountPrice}
                onChange={handleInputChange}
              />
              <label
                htmlFor="discountPrice"
                className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Title
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group ">
              <input type="text"
                className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                name="rating"
                value={editProduct.rating}
                onChange={handleInputChange}
              />
              <label
                htmlFor="rating"
                className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Title
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group ">
              <input type="text"
                className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                name="stock"
                value={editProduct.stock}
                onChange={handleInputChange}
              />
              <label
                htmlFor="stock"
                className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Title
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group ">
              <input type="text"
                className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                name="category"
                value={editProduct.category}
                onChange={handleInputChange}
              />
              <label
                htmlFor="category"
                className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Title
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group ">
              <input type="text"
                className="block py-2 px-0 w-full text-xl text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                name="image"
                value={editProduct.image}
                onChange={handleInputChange}
              />
              <label
                htmlFor="image"
                className="peer-focus:font-medium absolute text-xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Title
              </label>
            </div>
            <button
              type="submit"
              onClick={updateSingleProduct}
              className="text-white transition-all duration-300  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto   text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-16 py-2"
            >
              Submit
            </button>
          </div>
          <div className="w-1/4 ">
            <SketchPicker
              color={editProduct.color}
              onChange={(color: ColorResult) =>
                setEditProduct((prevProduct) => ({
                  ...prevProduct,
                  color: color.hex,
                }))
              }
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateItem