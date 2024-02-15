import { createSlice } from "@reduxjs/toolkit";


//For login state we need to create another slice 
 
const initialAuthState = {
    isAuthenticated : false
 };
 const authSlice = createSlice({
    name: 'authenticaton',
    initialState:initialAuthState,
    reducers:{
        loginHandler(state){
            state.isAuthenticated = true; 
        },
        logoutHandler(state){
            state.isAuthenticated = false;
        }
    }
  });

export default authSlice.reducer;
export const authActions = authSlice.actions; 