import {createSlice} from "@reduxjs/toolkit";
import {products} from "./productsList";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: 0,
        products: products
    },
    reducers: {
        add: (state, action) => {
            state.value += 1
        }
    }
})

export const {add} = cartSlice.actions
export default cartSlice.reducer