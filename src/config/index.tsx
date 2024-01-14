import { ENDPOINT } from "../constant/EndPoints";
import { instanceAxios } from "../api/instanceApi";
import { AddProduct, GetProduct, DeleteProduct, EditProduct, GetSingleProduct } from "../interfaces/data";

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
//GETSINGLE
export const getSingleProduct: GetSingleProduct = (productId) => {
    return instanceAxios({
        method: "GET", url: ENDPOINT.POST_ID(productId)
    })
}

//EDIT
export const updateProduct: EditProduct = (productId, updatedProduct) => {
    return instanceAxios({
        method: "PUT", url: ENDPOINT.POST_ID(productId), data: updatedProduct
    })
}
//DELETE
export const deleteProduct: DeleteProduct = (productId) => {
    return instanceAxios({
        method: "DELETE", url: ENDPOINT.POST_ID(productId)
    })
}