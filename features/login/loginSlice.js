
import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    username: '',
    isLoggedIn: false,
    role:''
  },
  reducers: {
    setLogin: (state, action) => {
      state.username = action.payload.username;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.role = action.payload.role;
    },
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;