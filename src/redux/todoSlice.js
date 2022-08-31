import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://630cc89e83986f74a7ca6c9a.mockapi.io/todos";

const initialState = {
  todos: [],
  isLoading: false,
  isError: null,
};

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const response = await axios.get(
    "https://630cc89e83986f74a7ca6c9a.mockapi.io/todos"
  );
  return response.data;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axios.delete(API_URL + `/${id}`);
});

export const createTodo = createAsyncThunk("todos/createTodo", async (todo) => {
  await axios.post(`https://630cc89e83986f74a7ca6c9a.mockapi.io/todos/`, todo);
});
export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async (todoID, form) => {
    const response = await axios.put(API_URL + `/${todoID}`, form);
    return response.data;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.todos = action.payload || [];
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isError = action.error.message;
      });
      // may be added others.
  },
});

export default todoSlice.reducer;
