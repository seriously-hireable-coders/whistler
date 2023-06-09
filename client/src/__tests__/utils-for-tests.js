import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// As a basic setup, import your same slice reducers
import userSlice from '../redux/userSlice';

export function renderWithProviders(
  ui,
  {
    preloadedState = {
      currentUser: {"_id":{"$oid":"354"},"username":"aa","email":"aa@gmail.com","password":"343y","followers":["er"],"following":[],"createdAt":{"$date":{"$numberLong":"454"}},"updatedAt":{"$date":{"$numberLong":"54"}},"__v":{"$numberInt":"0"},"profilePicture":"sth.jpg"},
      isLoading: false,
      error: false,
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { user: userSlice.reducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }


  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

xtest('not a test', () => {});