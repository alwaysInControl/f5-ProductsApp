import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'cart/fetchProducts',
    async () => {
        const response = await axios.get('https://dummyjson.com/products?limit=10&skip=10')
        return response.data
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: 0,
        products: [],
        loading: false,
        error: ''
    },
    reducers: {
        add: (state, action) => {
            state.value += 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true
            state.error = ''
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload.products
            state.loading = false
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export const {add} = cartSlice.actions
export default cartSlice.reducer