import { createSlice } from '@reduxjs/toolkit'
import jwt_decode from "jwt-decode";
import {fetchLoginUser} from '../thunk/authThunk';   
import { tokenRefresh } from '../thunk/tokenRefresh';

const initialState = {
  user:localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null,
  authToken: localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) :null,
  errors:null,
  loading: false,
  first_login:false
}

export const AuthReducer = createSlice({
  name: 'authreducer',
  initialState,
  reducers: {
    logoutuser: (state)=>{
      console.log("++++");
        state.user = null
        state.authToken = null
        state.loading=false
        state.errors = null
        localStorage.removeItem("authToken")
        state.first_login = false
        


        
       
    }
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

  
    builder.addCase(fetchLoginUser.fulfilled, (state, {payload}) => {
    
      state.user = payload.data.access
      state.authToken = payload.data
      localStorage.setItem("authToken", JSON.stringify(payload.data))
      state.first_login=true  
    })
    builder.addCase(fetchLoginUser.pending, (state) => {
        state.loading=true
    
    })
   
    builder.addCase(fetchLoginUser.rejected, (state, {payload}) => {
        console.log('errorr case');
        state.loading=false
       state.errors = payload
    
    
    })
    builder.addCase(tokenRefresh.fulfilled, (state, {payload}) => {

      state.user = payload.data.access
      state.authToken.access = payload.data
      localStorage.setItem("authToken", JSON.stringify(state.authToken))
      state.first_login=true  
    })
    builder.addCase(tokenRefresh.pending, (state) => {
        state.loading=true
    
    })
   
    builder.addCase(tokenRefresh.rejected, (state, {payload}) => {
        console.log('errorr case');
        state.loading=false
        state.errors = payload
        AuthReducer.caseReducers.logoutuser(state)
        
    
    
    })


    



  },
})

// Action creators are generated for each case reducer function
export const {logoutuser,authToken} = AuthReducer.actions

export default AuthReducer.reducer