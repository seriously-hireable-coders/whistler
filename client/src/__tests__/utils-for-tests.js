import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// As a basic setup, import your same slice reducers
import userSlice from '../redux/userSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
// export function renderWithProviders(
//   ui,
//   {
//     preloadedState = {
//       currentUser: {"_id":{"$oid":"647b3b87c91be26126908b09"},"username":"thomasl","email":"thomasl@gmail.com","password":"$2a$10$9/VT8GA5Mxlch9cKZ7dnpulKXOLQhTa4HqD./Heu874.6KhE8KzIy","followers":["647b1d57a425d84b22608ebe"],"following":[],"createdAt":{"$date":{"$numberLong":"1685797767747"}},"updatedAt":{"$date":{"$numberLong":"1686160631387"}},"__v":{"$numberInt":"0"},"profilePicture":"https://firebasestorage.googleapis.com/v0/b/whistler-b627a.appspot.com/o/1686089593024Mi%20(2).jpg?alt=media&token=d9e051ff-2170-4162-86f5-123566db9716"},
//       isLoading: false,
//       error: false,
//     },
//     // Automatically create a store instance if no store was passed in
//     store = configureStore({ reducer: { user: userSlice.reducer }, preloadedState }),
//     ...renderOptions
//   } = {}
// ) {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>
//   }

//   // Return an object with the store and all of RTL's query functions
//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
// }


export function renderWithProviders(
  ui,
  {
    preloadedState = {
      // currentUser: {"_id":{"$oid":"647b3b87c91be26126908b09"},"username":"thomasl","email":"thomasl@gmail.com","password":"$2a$10$9/VT8GA5Mxlch9cKZ7dnpulKXOLQhTa4HqD./Heu874.6KhE8KzIy","followers":["647b1d57a425d84b22608ebe"],"following":[],"createdAt":{"$date":{"$numberLong":"1685797767747"}},"updatedAt":{"$date":{"$numberLong":"1686160631387"}},"__v":{"$numberInt":"0"},"profilePicture":"https://firebasestorage.googleapis.com/v0/b/whistler-b627a.appspot.com/o/1686089593024Mi%20(2).jpg?alt=media&token=d9e051ff-2170-4162-86f5-123566db9716"},
      // isLoading: false,
      // error: false,
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { user: userSlice }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}


xtest('not a test', () => {});