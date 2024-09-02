// src/features/modal/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

// Export the action creators for use in components
export const { openModal, closeModal } = modalSlice.actions;

// Export the reducer as default
export default modalSlice.reducer;
