import { useEffect, useState } from "react"
import { Product } from "../interfaces/data"
import { getProduct } from "../config/index"

export const useFetchProducts = () => {
    const [datas, setDatas] = useState<Product[]>()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = async () => {
        try {
            const response = await getProduct()
            setDatas(response.data)
        }
        catch (error) {
            setError("error")
        }
        finally {
            setLoading(false);
          }
    }

    useEffect(() => {
        fetchProducts()
    },[])

    return {datas,loading,error,fetchProducts}
}
