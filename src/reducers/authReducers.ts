import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { NEXT_URL } from '../../config';
import axios from 'axios';

export const login = createAsyncThunk(
  'api/login',
  async (dispatch: { identifier: string; password: string }) => {
    const { identifier, password } = dispatch;

    return await axios.post(
      `${NEXT_URL}/api/login`,
      { identifier, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
);

export const logout = createAsyncThunk('api/logout', async () => {
  await axios.post(`${NEXT_URL}/api/logout`);
  window.location.reload();
});

export const checkUserLoggedIn = createAsyncThunk('api/user', async () => {
  return await axios.get(`${NEXT_URL}/api/user`);
});

export const register = createAsyncThunk(
  'api/register',
  async ({
    email,
    username,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }) => {
    return await axios.post(
      `${NEXT_URL}/api/register`,
      { username, email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state, action) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action: any) => {
      state.loading = false;
      state.user = action.payload.data.user;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //Check if user is logged in

    builder.addCase(checkUserLoggedIn.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(checkUserLoggedIn.fulfilled, (state, action: any) => {
      state.loading = false;
      state.user = action.payload.data.user;
    });
    builder.addCase(checkUserLoggedIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // register

    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action: any) => {
      state.loading = false;
      state.user = action.payload.data.user;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
