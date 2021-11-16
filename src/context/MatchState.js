import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counterSlice'
import matchReducer from './matchSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    match: matchReducer
  }
})
