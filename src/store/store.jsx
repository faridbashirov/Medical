import { configureStore } from '@reduxjs/toolkit'
import AuthReducer  from './reducers/userReducer'
import hostpialsReducer from './reducers/hostpialsReducer'

export const store = configureStore({
  reducer: {
    auth:AuthReducer,
    hospitals:hostpialsReducer,
  },
})