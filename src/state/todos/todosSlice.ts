import { SerializedError, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';
import {
  getTodoList,
  addTodo,
  toggleTodo,
  softDeleteTodo,
  restoreDeleted,
  deleteTodo
} from './helpers';
import type { Todo, TodoState } from './types';

const initialState: TodoState = {
  status: 'init',
  todos: [] as Todo[],
  error: null as unknown as SerializedError,
};

const todosSlice = createSlice({
  name: 'todoState',
  initialState,
  reducers: {
    /* getTodos: (state, action: PayloadAction<{ status: string }>): void => {
      const softDeleted = action.payload.status === 'inactive';

      state.todos = state.todos.filter(({ isDeleted }) => isDeleted === softDeleted);
    }, */
    createTodo: (
      state,
      action: PayloadAction<{ text: string, isCompleted: boolean, isDeleted: boolean }>
    ): void => {
      const newTodo = {
        ...action.payload,
        id: uuid(),
      }
      state.todos =  addTodo(newTodo);
    },
    toggleTodoStatus: (state, action: PayloadAction<string>): void => {
      state.todos = toggleTodo(action.payload);
    },
    softDelete: (state, action: PayloadAction<string>): void => {
      state.todos = softDeleteTodo(action.payload);
    },
    restoreTodo: (state, action: PayloadAction<string>): void => {
      state.todos = restoreDeleted(action.payload);
    },
    hardDelete: (state, action: PayloadAction<string>): void => {
      state.todos = deleteTodo(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'success';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'error';
        state.todos = [];
        state.error = action.error;
      })
  },
});

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return getTodoList();
});

export const { createTodo, toggleTodoStatus, softDelete, restoreTodo, hardDelete } = todosSlice.actions;

export default todosSlice.reducer;
