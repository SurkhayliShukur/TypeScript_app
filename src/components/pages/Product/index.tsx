import Layout from "../../layout/Layout"
import React, { useState } from "react"
import { useFetchProducts } from "../../../common/GetCustom"
import { useNavigate } from "react-router-dom"
import { Product } from "../../../interfaces/data"




const Products: React.FC = () => {

    const { datas, error, loading } = useFetchProducts()
    const navigate = useNavigate()

    const [filterTitle, setFilterTitle] = useState<string>("")

    const filterData = datas.filter((product: Product) => {
        const FilterValue = filterTitle.toLocaleLowerCase();
        return (
            product.title.toLowerCase().includes(FilterValue) ||
            product.category.toLowerCase().includes(FilterValue)
        );
    })


    return (
        <>
            <Layout>
                <div>
                    <div className="flex justify-center mt-6 mb-6">
                        <input
                            type="text"
                            placeholder="Filter Products"
                            value={filterTitle}
                            onChange={(e) => setFilterTitle(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-cyan-400"
                        />
                    </div>
                    <div className="container grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-14">
                    {error && (
              <p className="m-20 text-red-300 text-2xl ">
                Fetching Data: {error}
              </p>
            )}
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Products