import { configureStore } from '@reduxjs/toolkit'
import AuthReducer  from './reducers/userReducer'
import hostpialsReducer from './reducers/hostpialsReducer'
import positionsReducer from './reducers/positionsReducer'
import socialsReducer from './reducers/socialsReducer'
import contactReducer from './reducers/contactReducer'
export const store = configureStore({
  reducer: {
    auth:AuthReducer,
    hospitals:hostpialsReducer,
    positions:positionsReducer,
    socials:socialsReducer,
    contact:contactReducer,
  },
})