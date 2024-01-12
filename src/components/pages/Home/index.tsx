import Layout from "../../layout/Layout"
import {useFetchProducts} from  "../../../common/GetCustom"
import { useState } from "react"
import {Product} from "../../../interfaces/data"


const Home: React.FC = () => {

  const {datas, loading, error, fetchProducts} = useFetchProducts()
  const [head,setHead] = useState<Product[]>([])




 

  return (
    <>
      <Layout>
        <div className="container py-10">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

            </table>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home