import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./sclices/CartSlices";

export const Store=configureStore({
    reducer:{
        cart:CartSlice,
    }
})