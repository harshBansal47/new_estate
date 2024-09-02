import { createSlice } from '@reduxjs/toolkit';

// Initial state for auth slice
const initialState = {
  user: null,
  token: null,
  expiresAt:  null,
  isAuthenticated: false, // Initialize based on token presence
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredential: (state, action) => {
      const { token, expiresAt, user } = action.payload;
      state.user = user;
      state.token = token;
      state.expiresAt = expiresAt;
      state.isAuthenticated = true;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
      state.expiresAt = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredential, clearCredentials } = authSlice.actions;
export default authSlice.reducer;