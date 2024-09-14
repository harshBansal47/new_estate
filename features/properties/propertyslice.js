import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    city: ""
};

const PropertySlice = createSlice({
    name: "property", 
    initialState,
    reducers: {
        addPropertiesCityWise: (state, action) => {
            state.data = action.payload;
        }
    }
});

// Exporting the action creator
export const { addPropertiesCityWise} = PropertySlice.actions;

// Exporting the reducer
export default PropertySlice.reducer;