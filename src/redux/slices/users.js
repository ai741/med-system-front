import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await axios.get(`/users/getAll`);
  return data;
});
export const fetchOneUser = createAsyncThunk(
  "users/fetchOneUser",
  async (id) => {
    const { data } = await axios.get(`/users/getOne/${id}`);
    return data;
  }
);

export const fetchCreateUsers = createAsyncThunk(
  "users/fetchCreateUsers",
  async (params) => {
    const { data } = await axios.post(`/users/createUser`, params);
    return data;
  }
);

export const fetchDeleteUsers = createAsyncThunk(
  "users/deleteUsers",
  async (id) => {
    await axios.delete(`/users/removeUser/${id}`);
  }
);

export const fetchUpdateUsers = createAsyncThunk(
  "users/fetchUpdateUsers",
  async (id, params) => {
    const { data } = await axios.patch(`/users/updateUser/${id}`, params);
    return data;
  }
);

const initialState = {
  data: null,
  status: "loading",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    //Получение всех
    [fetchUsers.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.data = action.payload;
      console.log(action.payload);
      state.status = "loaded";
    },
    [fetchUsers.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },

    //Получение одного
    [fetchOneUser.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchOneUser.fulfilled]: (state, action) => {
      state.data = action.payload;
      console.log(action.payload);
      state.status = "loaded";
    },
    [fetchOneUser.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },

    //Создание
    [fetchCreateUsers.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchCreateUsers.fulfilled]: (state, action) => {
      state.data = action.payload;
      console.log(action.payload);
      state.status = "loaded";
    },
    [fetchCreateUsers.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },

    //Изменение
    [fetchUpdateUsers.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchUpdateUsers.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },

    [fetchDeleteUsers.pending]: (state, action) => {
      state.data = state.data.filter((obj) => obj._id !== action.payload);
    },
  },
});

export const usersReducer = usersSlice.reducer;
