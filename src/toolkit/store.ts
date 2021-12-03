import { configureStore } from '@reduxjs/toolkit'
import headerSlice from './headerSlice'
export const store = configureStore({
  reducer: {
    header: headerSlice
  }
})