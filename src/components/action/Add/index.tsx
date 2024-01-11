import React,{useState} from "react"
import moment from "moment"
import { InitialStateType } from "../../../interfaces/data"
import Layout from "../../layout/Layout"

const Add: React.FC = () => {

  const createDate = moment().valueOf()

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
  const [addProduct,setAddProduct] = useState<InitialStateType>(initialState)
  return (
    <>
    <Layout>

    </Layout>
    </>
  )
}

export default Add