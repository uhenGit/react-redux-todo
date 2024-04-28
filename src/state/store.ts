import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todos/todosSlice';

export const store = configureStore({
  reducer: {
    todoState: todosReducer,
  },
  // preloadedState: {
  //   todoState: {
  //     status: 'success',
  //     todos: [
  //       {
  //         id: '-1',
  //         text: 'Test todo. It will automatically removed after adding new one',
  //         isCompleted: false,
  //         isDeleted: false,
  //       },
  //     ],
  //     error: null,
  //   },
  // },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;