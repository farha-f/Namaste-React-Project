import { configureStore } from "@reduxjs/toolkit";
import cartReducr from "./CartSlice";
const appStore=configureStore({
    reducer:{
        cart:cartReducr
    }
});
export default appStore;