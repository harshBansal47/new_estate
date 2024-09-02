import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token') || null,
    expiresAt: localStorage.getItem('expiresAt') || null,
    isAuthenticated: false,
  },
  reducers: {
    setCredential: (state, action) => {
      const { token, expiresAt, user } = action.payload;
      state.user = user;
      state.token = token;
      state.expiresAt = expiresAt;
      state.isAuthenticated = true;
      localStorage.setItem('token', token);
      localStorage.setItem('expiresAt', expiresAt);
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
      state.expiresAt = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      localStorage.removeItem('expiresAt');
    },
  },
});

export const { setCredential, clearCredentials } = authSlice.actions;
export default authSlice.reducer;