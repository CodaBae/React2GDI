import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {getProduct} from "../api/productApi";
import { getProductByID } from "../api/productApi";

export const fetchProductsAsync = createAsyncThunk(
    'products/getProduct',
    async () => {
        const response = await getProduct()
        return response
    }

)

export const fetchProductsByIDAsync = createAsyncThunk(
    'products/getProduct/id',
    async (payload) => {
        // const {id} = payload
        const response = await getProductByID(payload)
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
    reducers: {

    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchProductsAsync.pending, (state) =>{
                state.status = 'loading'
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) =>{
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchProductsAsync.rejected, (state) =>{
                state.status = 'failed'
                state.error = 'something went wrong'
            })
            .addCase(fetchProductsByIDAsync.pending, (state) =>{
                state.status = 'loading'
            })
            .addCase(fetchProductsByIDAsync.fulfilled, (state, action) =>{
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchProductsByIDAsync.rejected, (state) =>{
                state.status = 'failed'
                state.error = 'something went wrong'
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