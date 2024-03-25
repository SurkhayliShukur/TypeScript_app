import { ENDPOINT } from "../constant/EndPoints";
import { instanceAxios } from "../api/instanceApi";
import { AddProduct, GetProduct, DeleteProduct, EditProduct, GetSingleProduct, Users } from "../interfaces/data";


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
        method: "PUT", url: ENDPOINT.POST_ID(productId), data: updatedProduct,
    })
}
//DELETE
export const deleteProduct: DeleteProduct = (productId) => {
    return instanceAxios({
        method: "DELETE", url: ENDPOINT.POST_ID(productId)
    })
}


//ADD USER
export const addUser = (newUser: Users) => {
    return instanceAxios({
        method: "POST",
        url: ENDPOINT.USERS,
        data: newUser
    })
}
//GET USER
export const getUser = async () => {
    try {
        const response = await instanceAxios({
            method: "GET",
            url: ENDPOINT.USERS,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

//EDIT USER
export const updateUser = async (userId: number, updatedUserData: Partial<Users>) => {
    try {
        const response = await instanceAxios({
            method: "PUT",
            url: `${ENDPOINT.USERS}/${userId}`,
            data: updatedUserData
        })
        return response.data
    }
    catch (error) {
        throw error;
    }

}
//DELETE USER 
export const deletedUser = async (userId:number) => {
    try{
        const response = await instanceAxios({
            method:"DELETE",
            url: `${ENDPOINT.USERS}/${userId}`
        })
        return response.data
    }
    catch (error) {
        throw error;
    }
}


