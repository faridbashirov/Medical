import { createSlice } from '@reduxjs/toolkit'
import jwt_decode from "jwt-decode";
import { fetchHospitals } from '../thunk/hospitalsThunk';


const initialState = {
  hospitals: [],
  loading:false
}

export const HospitalsReducer = createSlice({
  name: 'HospitalsReducer',
  initialState,
  reducers: {
    
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

  
    builder.addCase(fetchHospitals.fulfilled, (state, {payload}) => {
    
     state.hospitals = payload
    })
    builder.addCase(fetchHospitals.pending, (state) => {
        state.loading=true
    
    })
   
    builder.addCase(fetchHospitals.rejected, (state, {payload}) => {
      
state.loading=false
     state.errors = payload
    
    
    })
  },
})

// Action creators are generated for each case reducer function
export const {} = HospitalsReducer.actions

export default HospitalsReducer.reducer