import axios from "axios";
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
import { HYDRATE } from "next-redux-wrapper";

export const authRegister = createAsyncThunk('auth/register', async (data) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/auth/register`, data);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
});

export const authLogin = createAsyncThunk('auth/login', async (data) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/auth/login`, data);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
});

export const authLogout = createAsyncThunk('auth/logout', async (data) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/auth/logout`);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
});

export const updateData = createAsyncThunk('user', async (data) => {
  try {
    const res = await axios.patch(`${process.env.NEXT_PUBLIC_URL}/api/user`, data);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
});

export const getData = createAsyncThunk('get/user', async (data) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/user`);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
});

const authSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    user: { }
  },
  reducers: {
    logOut(state, action) {
      state = { isAuth: false, user: {} };
    }
  },
  extraReducers: builder => {
    builder
      .addCase(HYDRATE, (state, action) => {
        return state;
      })
      .addCase(authRegister.fulfilled, (state, action) => {
        return { isAuth: true, user: action.payload };
      })
      .addCase(authRegister.rejected, (state, action) => {
        throw action.error.message;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        return { isAuth: true, user: action.payload };
      }).addCase(authLogin.rejected, (state, action) => {
        throw action.error.message;
      })
      .addCase(updateData.fulfilled, (state, action) => {
        return { isAuth: true, user: { ...state.user, ...action.payload } };
      })      
      .addCase(getData.fulfilled, (state, action) => {
        return { isAuth: true, user: { ...action.payload } };
      })       
      .addCase(getData.rejected, (state, action) => {
        return { isAuth: false, user: { } };
      })      
      .addCase(authLogout.fulfilled, (state, action) => {
        return { isAuth: false, user: {} };
      })
  }
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;