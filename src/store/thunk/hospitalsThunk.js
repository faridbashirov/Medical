import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { axiosPrivate } from '../../api/api';

export const fetchHospitals = createAsyncThunk(
    'users/fetchHospitals',
    async (obj,thunkAPI) => {
        
      try {
        
       
        const data =  await axiosPrivate.get(`https://hospitalbackend.efgroup.az/${obj === "ru" ? "" : obj+"/"}hospital/hospitals`)
       
        console.log(data,"salam");
        return data
      } catch (error) {
       return  thunkAPI.rejectWithValue(error.message)
      }
    }
  )

