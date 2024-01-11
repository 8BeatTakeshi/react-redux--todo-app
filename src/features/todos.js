import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      task: "Apprendre Javascript",
      completed: true,
    },
    {
      id: 2,
      task: "Apprendre React",
      completed: true,
    },
    {
      id: 3,
      task: "Apprendre Redux toolkit",
      completed: true,
    },
    {
      id: 4,
      task: "Continuer d'apprendre",
      completed: false,
    },
  ],
  completedCount: 0,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      if (state.todos.find((todo) => todo.id === action.payload).completed) {
        state.completedCount = state.completedCount - 1;
      }
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action) => {
      state.todos.find((todo) => todo.id === action.payload).completed =
        !state.todos.find((todo) => todo.id === action.payload).completed;
    },
    updateCompletedCount: (state, action) => {
      state.completedCount += action.payload;
    },
    clearAllCompletedTodo: (state) => {
      state.completedCount = 0;
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const {
  createTodo,
  deleteTodo,
  completeTodo,
  clearAllCompletedTodo,
  updateCompletedCount,
} = todosSlice.actions;
export default todosSlice.reducer;
