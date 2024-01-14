import { ENDPOINT } from "../constant/EndPoints";
import { instanceAxios } from "../api/instanceApi";
import { AddProduct, GetProduct, DeleteProduct } from "../interfaces/data";

//ADD 
export const addProduct: AddProduct = (newProduct) => {
    return instanceAxios({
        method: "POST",
        url: ENDPOINT.POSTS,
        data: newProduct
    })
}
//GET
export const getProduct: GetProduct = (params) => {
    return instanceAxios({
        method: "GET", url: ENDPOINT.POSTS, params
    })
}
//DELETE
export const deleteProduct:DeleteProduct = (productId) => {
    return instanceAxios({
        method: "DELETE", url: ENDPOINT.POST_ID(productId)
    })
}