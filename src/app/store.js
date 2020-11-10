import { configureStore } from '@reduxjs/toolkit'
import mainSlice from '../features/Main/mainSlice'

const rootReducer = {
  main: mainSlice
}

const store = configureStore({
  reducer: rootReducer
})

export default store