import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for login slice
const initialState = {
  username: '',
  isLoggedIn: false,
  role: '',
  token:'',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.username = action.payload.username;
      state.isLoggedIn = true; // Directly set to true when login is successful
      state.role = action.payload.role;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.username = '';
      state.isLoggedIn = false;
      state.role = '';
    },
  },
});

export const { setLogin, logout } = loginSlice.actions;
export default loginSlice.reducer;