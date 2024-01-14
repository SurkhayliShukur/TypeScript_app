import { useState,useEffect } from "react"
import { Product } from "../interfaces/data"
import { getSingleProduct } from "../config/index"

export const useFetchSingleProduct = (productId: number) => {

    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchSingleProduct = async () => {
        try {
            const response = await getSingleProduct(productId)
            setProduct(response.data)

        }
        catch (error) {
            setError("error")
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchSingleProduct();
      }, [productId]);

    return { product, loading, error,fetchSingleProduct }


}

