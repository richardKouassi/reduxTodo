import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // Chaque tâche : { id, description, isDone }
  items: [
    { id: nanoid(), description: "Réviser Redux Toolkit", isDone: false },
    { id: nanoid(), description: "Installer Tailwind CSS", isDone: true },
  ],
  // "all" | "done" | "todo"
  filter: "all",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      // prepare : génère l'id automatiquement
      prepare(description) {
        return {
          payload: { id: nanoid(), description, isDone: false },
        };
      },
    },
    editTask(state, action) {
      const { id, description } = action.payload;
      const task = state.items.find((t) => t.id === id);
      if (task) task.description = description;
    },
    toggleTask(state, action) {
      const task = state.items.find((t) => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
      
    },
    deleteTask(state, action) {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addTask, editTask, toggleTask, deleteTask, setFilter } =
  tasksSlice.actions;

// Sélecteurs
export const selectFilter = (state) => state.tasks.filter;

export const selectVisibleTasks = (state) => {
  const { items, filter } = state.tasks;
  if (filter === "done") return items.filter((t) => t.isDone);
  if (filter === "todo") return items.filter((t) => !t.isDone);
  return items;
};

export default tasksSlice.reducer;
