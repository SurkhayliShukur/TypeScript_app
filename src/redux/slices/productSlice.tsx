import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
    totalDiscountPrice: 0,
}

 
export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        
    }

})

export default productSlice.reducer