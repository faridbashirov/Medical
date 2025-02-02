import { configureStore } from '@reduxjs/toolkit'
import AuthReducer  from './reducers/userReducer'
import hostpialsReducer from './reducers/hostpialsReducer'
import positionsReducer from './reducers/positionsReducer'
export const store = configureStore({
  reducer: {
    auth:AuthReducer,
    hospitals:hostpialsReducer,
    positions:positionsReducer,
  },
})