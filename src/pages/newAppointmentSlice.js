import { createSlice } from "@reduxjs/toolkit";

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    appointment: {},
  },
  reducers: {
    newAppointment: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

//exporto las ACCIONES.....
export const { newAppointment } = appointmentSlice.actions;

export const appointmentData = (state) => state.detail;

export default appointmentSlice.reducer;
