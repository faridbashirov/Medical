import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const tokenRefresh = createAsyncThunk(
    'users/tokenRefresh',
    async (token,thunkAPI) => {
        console.log(token);
        
       try {
       
       
        
    
        const data =  await axios.post("https://hospitalbackend.efgroup.az/account/refresh-token/",{
            "refresh":131231231
           
        })
       
        

        return data
      } catch (error) {
       return  thunkAPI.rejectWithValue("User not found")
      }
    }
  )

