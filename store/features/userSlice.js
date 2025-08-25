const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  user: null,
  loading: false,
  error: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.error = null;
      state.loading = true;
      state.isLoggedIn = false;
    },
    loginFailed: (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.isLoggedIn = true;
    },
    logoutStart: (state) => {
        state.loading=true;
      state.error = false;
      state.isLoggedIn = true;
    },
    logoutFailed: (state,action) => {
        state.loading=false;
      state.error = action.payload;
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.loading = false;
      state.error = false;
      state.isLoggedIn = false;
    },
    signUpStart: (state) => {
      state.loading = true;
      state.error = null;
      state.isLoggedIn = false;
    },
    signUpFailed: (state,action) => {
      state.loading = false;
      state.error=action.payload;
      state.isLoggedIn = false;
    },
    signUpSuccess: (state) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.error = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  logoutStart,
  logoutFailed,
  logoutSuccess,
  signUpStart,
  signUpFailed,
  signUpSuccess
} = userSlice.actions;
export default userSlice.reducer;
