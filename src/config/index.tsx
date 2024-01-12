import { ENDPOINT } from "../constant/EndPoints";
import { instanceAxios } from "../api/instanceApi";
import { AddProduct, GetProduct } from "../interfaces/data";

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