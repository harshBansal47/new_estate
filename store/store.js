// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
import agentSlice from '../features/agent/agentSlice';
import filterSlice from '../features/filter/filterSlice';
import propertiesSlice from '../features/properties/propertiesSlice';
import { api } from '../features/api/api';
import loginreducer from '../features/login/loginSlice'
import authreducer from '../features/login/authSlice'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        properties: propertiesSlice,
        filter: filterSlice,
        agent: agentSlice,
        modal: modalReducer, 
        login:loginreducer, // Ensure modalReducer is correctly imported and assigned
        auth:authreducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});