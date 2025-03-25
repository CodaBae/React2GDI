import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/productsSlice'
import cartReducer from '../features/cartSlice'



export const store = configureStore(
    {
        reducer: {
            products: productReducer,
            cart: cartReducer
        }
    }
)


  
 