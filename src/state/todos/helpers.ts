import type { Todo } from "./types";

export function getTodoList(): Todo[] {
  const savedTodos = localStorage.getItem('todos');

  return savedTodos
    ? JSON.parse(savedTodos)
    : [];
}

export function addTodo(todo: Todo): Todo[] {
  const savedTodos = getTodoList();
  savedTodos.push(todo);
  localStorage.setItem('todos', JSON.stringify(savedTodos));

  return savedTodos;
}

export function toggleTodo(todoId: string): Todo[] {
  const savedTodos = getTodoList();
  const updatedList = savedTodos
    .map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }

      return todo;
    });
  localStorage.setItem('todos', JSON.stringify(updatedList));  

  return updatedList;
}

export function softDeleteTodo(todoId: string): Todo[] {
  const savedTodos = getTodoList();
  const processedList = savedTodos
    .map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDeleted: true,
        };
      }

      return todo;
    });
  localStorage.setItem('todos', JSON.stringify(processedList));

  return processedList;
}

/**
 * Use the separate function for the soft delete and for the restore a todo to get clear usage in the component
 * @param {string} todoId
 * @returns {Array} todo list
 */
export function restoreDeleted(todoId: string): Todo[] {
  const savedTodos = getTodoList();
  const processedList = savedTodos
    .map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDeleted: false,
        };
      }

      return todo;
    });
  localStorage.setItem('todos', JSON.stringify(processedList));

  return processedList;
}

export function deleteTodo(todoId: string): Todo[] {
  const savedTodos = getTodoList();
  const filteredList = savedTodos
    .filter(({ id }) => id !== todoId);
  localStorage.setItem('todos', JSON.stringify(filteredList));

  return filteredList;
}