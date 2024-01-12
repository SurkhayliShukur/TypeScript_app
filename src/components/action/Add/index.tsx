import React,{useState} from "react"
import moment from "moment"
import {useNavigate} from "react-router-dom"
import { InitialStateType } from "../../../interfaces/data"
import { addProduct } from "../../../config"
import Layout from "../../layout/Layout"
import {toast} from "react-toastify"
import { ROUTER } from "../../../constant/Router"

const Add: React.FC = () => {

  const createDate = moment().valueOf()
  const navigate = useNavigate()

  const initialState: InitialStateType = {
    title: "",
    description:"",
    price:0,
    discountPrice: 0,
    rating: 0,
    stock: 0,
    category: "",
    image: "",
    create_at: createDate,
    color: "#000",
  }
  const [newProduct,setNewProduct] = useState<InitialStateType>(initialState)
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target
    const numericValue = isNaN(Number(value)) ? value : Number(value);
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]:numericValue
    }))
  }
  const isEmpty: boolean = Object.values(addProduct).some(
    (value) => value === "" || value === 0
  );
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(isEmpty){
      toast.error("Please fill in all fields", {
        autoClose: 1000,
      });
      return
    }
    try{
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
        <form className="flex justify-center">
          
        </form>

      </div>
    </Layout>
    </>
  )
}

export default Add