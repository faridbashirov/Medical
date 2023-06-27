import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchHospitals = createAsyncThunk(
    'users/fetchHospitals',
    async (thunkAPI) => {
        
      try {
       
        const data =  await axios.get("https://hospitalbackend.efgroup.az/hospital/hospitals",{
         
        })
       

        return data.data
      } catch (error) {
       return  error.message
      }
    }
  )

