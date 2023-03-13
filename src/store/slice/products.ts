import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import { Product } from '../../types';



type ProductState = {
   list: Product[];
   loading: boolean;
   error: string | null;
}



export const fetchProduct = createAsyncThunk<Product[], undefined, { rejectValue: string }>(
   'products/fetchTodos',
   async function (_, { rejectWithValue }) {
      const response = await fetch('https://dummyjson.com/products?limit=0&skip=0');

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
         .addMatcher(isError, (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
         });
   }
});


export default productsSlice.reducer;

function isError(action: AnyAction) {
   return action.type.endsWith('rejected');
}