// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
import agentSlice from '../features/agent/agentSlice';
import filterSlice from '../features/filter/filterSlice';
import { api } from '../features/api/api';
import loginreducer from '../features/login/loginSlice'
import authreducer from '../features/login/authSlice'
import propertyreducer from '@/features/properties/propertyslice';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        filter: filterSlice,
        agent: agentSlice,
        modal: modalReducer, 
        login:loginreducer, // Ensure modalReducer is correctly imported and assigned
        auth:authreducer,
        property:propertyreducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});