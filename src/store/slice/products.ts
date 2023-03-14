import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import { Error, Product } from '../../types';



type ProductState = {
   list: Product[];
   loading: boolean;
   error: string | null;
}



export const fetchProduct = createAsyncThunk<Product[], undefined, { rejectValue: string }>(
   'products/fetchProducts',
   async function (_, { rejectWithValue }) {
      const response = await fetch(`https://dummyjson.com/products?limit=0&ski2p=0`);
      

      if (!response.ok) {
         console.log(response)
         return rejectWithValue('Server Error!');
      }
      const data = await response.json();
      return data.products;
   }
);

export const getOneCategory = createAsyncThunk<Product[], string, { rejectValue: string }>(
   'products/fetchOneCategory',
   async function (param, { rejectWithValue }) {
      const response = await fetch(`https://dummyjson.com/products/category/${param}?limit=0&skip=0`);
      if (!response.ok) {
         return rejectWithValue('Server Error!');
      }
      const data = await response.json();
      return data.products;
   }
);


const initialState: ProductState = {
   list: [],
   loading: false,
   error: null,
}

const productsSlice = createSlice({
   name: 'Products',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchProduct.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
         })
         .addCase(getOneCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(getOneCategory.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
         })
         .addMatcher(isError, (state, action: PayloadAction<string,string,null,Error>) => {
            console.log(action.error)

            state.error = action.error.message;
            state.loading = false;
         });
   }
});


export default productsSlice.reducer;

function isError(action: AnyAction) {
   return action.type.endsWith('rejected');
}