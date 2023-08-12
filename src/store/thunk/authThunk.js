import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const fetchLoginUser = createAsyncThunk(
    'users/fetchLoginUser',
    async (userObj,thunkAPI) => {
      
        console.log(userObj.email)
       
      try {
      
        const data =  await axios.post(`https://hospitalbackend.efgroup.az/${userObj.lang === "ru" ? "" :userObj.lang + "/" }account/login/`,{
            username:userObj.username,
            password: userObj.password,
        })
       
        

        return data
      } catch (error) {
        var message=""
        if(userObj.lang === "ru"){
          message="Не найдено активной учетной записи с указанными данными"
      }
      else if(userObj.lang === "az"){
        message="Göstərilən detallarla aktiv hesab tapılmadı"
      }

      else{
        message="No active account found with the specified details"
      }
       
        
      
    

        return  thunkAPI.rejectWithValue(message)
      }
    }
  )

