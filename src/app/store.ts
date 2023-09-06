import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Import your storage type (e.g., local storage)

import cartReducer from '../features/cart/CartSlice'

// Create a Redux Persist configuration
const persistConfig = {
  key: 'root', // Key to use for storing data in storage
  storage, // Storage type (local storage, AsyncStorage, etc.)
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, cartReducer);


export const store = configureStore({
  reducer: {
    cart: persistedReducer
  },
})

export const persistor = persistStore(store);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch