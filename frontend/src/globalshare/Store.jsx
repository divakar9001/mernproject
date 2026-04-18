import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from './Action'

export const store = configureStore({
  reducer:{
    card:sliceReducer
  },
})

