import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "../AsyncThunk/authAsyncThunk";
import { THUNKSTATUS } from "../Constant/reduxConstant";

const initialState = {
  user: null,
  token: null,
  drawerOpen: false,
  componentDrawerOpen: true
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  userLoginStatus: null,
  reducers: {
    addToken: (state, action) => {
      console.log("action", action);
      state.token = action?.payload;
    },
    removeToken:(state,action)=>{
state.token = null;
state.user=null;
    },
    openDrawer(state,action){
      state.drawerOpen = action.payload.drawerOpen
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.pending, (state, action) => {
      state.userLoginStatus = THUNKSTATUS.LAODING;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.userLoginStatus = THUNKSTATUS.SUCCESS;
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.userLoginStatus = THUNKSTATUS.FAILED;
    });
  },
});
export const { addToken,openDrawer,removeToken } = authSlice.actions;
export const authState = (state) => state.authState;
export default authSlice.reducer;
