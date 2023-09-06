import { createAction, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  products: Record<string, any>;
  cartItems: any[];
  formValues: Record<string, any>;
}

const initialState: CounterState = {
  value: 0,
  products: {},
  cartItems: [],
  formValues: {},
}

export const updateFormValues = createAction<{ name: string; value: string }>(
  'cart/updateFormValues'
);


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    addProduct: (state, action) => {
      const { id } = action.payload;
      state.products[id] = action.payload; // Store the product by its ID
      console.log("Product added to store:", action.payload);
    },
    addToCart: (state, action: PayloadAction<any>) => {
      state.cartItems.push(action.payload); // Add the product to the cartItems array
    },
    updateFormValues: (state, action) => {
      const { name, value } = action.payload;
      state.formValues[name] = value;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addProduct, addToCart } = cartSlice.actions

export default cartSlice.reducer