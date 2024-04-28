import { SerializedError } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
  isDeleted: boolean;
}

export type TodoState = {
  status: string;
  todos: Todo[];
  error: null | unknown | SerializedError;
}
