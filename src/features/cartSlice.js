import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { addToCart, getCart } from "../api/cartApi";

export const addToCartAsync = createAsyncThunk(
    'cart/addToCard',
    async (userId, productId, qauntity) => {
        const response = await addToCart(userId, productId, qauntity)
        return response
    }

)

export const fetchCartAsync = createAsyncThunk(
    'cart/getCart',
    async () => {
        const response = await getCart()
        return response
    }

)





const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {

        builder
            .addCase(addToCartAsync.pending, (state) =>{
                state.status = 'loading'
            })
            .addCase(addToCartAsync.fulfilled, (state, action) =>{
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(addToCartAsync.rejected, (state) =>{
                state.status = 'failed'
                state.error = 'something went wrong'
            })
            .addCase(fetchCartAsync.pending, (state) =>{
                state.status = 'loading'
            })
            .addCase(fetchCartAsync.fulfilled, (state, action) =>{
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchCartAsync.rejected, (state) =>{
                state.status = 'failed'
                state.error = 'something went wrong'
            })

    }
})




export default cartSlice.reducer