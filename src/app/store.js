import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/productsSlice'



export const store = configureStore(
    {
        reducer: {
            products: productReducer
        }
    }
)


  
 