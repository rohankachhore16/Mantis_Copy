import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNCROUTES } from "../Constant/reduxConstant";
import { loginService } from "../Services/authService";

export const loginAsync = createAsyncThunk(
  ASYNCROUTES.USELOGIN,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await loginService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
