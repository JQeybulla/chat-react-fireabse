import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: localStorage.getItem('user') ?
      localStorage.getItem('user') : false
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = false;
    }
  }
})

export const {login, logout} = userSlice.actions;
export const userReducer = userSlice.reducer;
