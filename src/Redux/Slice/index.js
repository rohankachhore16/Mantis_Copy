import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import menu from "./menu";

export default combineReducers({
login:authSlice,
menu:menu
});