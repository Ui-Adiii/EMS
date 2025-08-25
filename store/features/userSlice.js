const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    user:null,
    loading:false,
    error:null,
    isLoggedIn:false
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user  = action.payload;
            state.loading = false;
            state.isLoggedIn = true;
        },
        logout:(state)=>{
            state.user = null;
            state.loading = false;
            state.error = false;
            state.isLoggedIn = false;
        },
        signUp: (state,action)=>{
            state.user = action.payload;
            state.loading = false;
            state.isLoggedIn = true;
        }
    }
})

export const { login, logout, signUp } = userSlice.actions;
export default userSlice.reducer;