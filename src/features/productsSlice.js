import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import getProduct from "../api/productApi";

export const fetchProductsAsync = createAsyncThunk(
    'products/getProduct',
    async () => {
        const response = await getProduct()
        return response
    }

)

const productSlice = createSlice({
    name: 'products',
    initialState:{
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(fetchProductsAsync.pending, (state) =>{
                state.status = 'loading'
            })
            .addCase(fetchProductsAsync.fulfilled, (state) =>{
                state.status = 'succeeded'
            })
            .addCase(fetchProductsAsync.rejected, (state) =>{
                state.status = 'failed'
            })

    }
})


// const counter = createSlice({
//     name:'counter',
//     initialState:{value: 0},
//     reducers:{
//         add: (state) => { state.value + 1},
//         minus: (state) => {state.value - 1},
//         reset:(state) => {state.value = 0},
//     }

// })


export default productSlice.reducer