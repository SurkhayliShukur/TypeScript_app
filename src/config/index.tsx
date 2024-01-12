import { ENDPOINT } from "../constant/EndPoints";
import { instanceAxios } from "../api/instanceApi";
import { AddProduct } from "../interfaces/data";

//ADD 
export const addProduct: AddProduct = (newProduct) => {
    return instanceAxios({
        method: "POST",
        url: ENDPOINT.POSTS,
        data: newProduct
    })
}