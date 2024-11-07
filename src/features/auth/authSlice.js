import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { register } from "./authservise";

const userExist = JSON.parse(localStorage.getItem('user'))


const authSlice = createSlice({
    name : 'auth',
      initialState : {
        user : userExist || null,
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : "",
      },
      extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending , (state , action)=>{
          state.isLoading = true;
          state.isError = false;
          state.isSuccess = false;
          state.message = action.payload;
        })
        .addCase(registerUser.fulfilled , (state , action)=>{
          state.isLoading = false;
          state.isError = false; 
          state.isSuccess = true;
          state.user = action.payload
        })
        .addCase(logOutUser. rejected , (state , action)=>{
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = false;
          state.user = null;
        });
      },
});



export const registerUser = createAsyncThunk(
  "AUTH/REGISTER" ,
   async(formData , thunkAPI)=>{
    try{
      return await register(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);

    }
}
);

export const logOutUser = createAsyncThunk("AUTH/LOGOUT", async()=>{
  localStorage.removeItem("user")
});

                                    



export default authSlice.reducer;