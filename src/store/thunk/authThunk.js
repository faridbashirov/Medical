import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const fetchLoginUser = createAsyncThunk(
    'users/fetchLoginUser',
    async (userObj, thunkAPI) => {
      
        console.log(userObj.email)
      try {
       
        const data =  await axios.post("https://hospitalbackend.efgroup.az/account/login/",{
            username:userObj.email,
            password: userObj.password,
        })
       
        

        return data
      } catch (error) {
       return  thunkAPI.rejectWithValue("User not found")
      }
    }
  )

