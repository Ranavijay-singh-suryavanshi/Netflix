import { createSlice } from "@reduxjs/toolkit";

 const userSlice = createSlice({
    name:'user',
    initialState: {
        value: null,
      },
      reducers: {
        addUser: (state, action) => {
          state.value = action.payload; // ✅ updates the value field
        },
        removeUser: (state) => {
          state.value = null; // ✅ resets value field
        }
      }
 }
 );

 export const { addUser, removeUser } = userSlice.actions;
 export default  userSlice.reducer;