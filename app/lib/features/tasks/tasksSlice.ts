import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface ITasksState {
  value: any[];
}

const initialState: ITasksState = {
  value: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<any[]>) => {
      state.value = action.payload;
    },
    removeTask: (state, action: PayloadAction<any>) => {
      state.value = state.value.filter((item: any) => item.id !== action.payload.id);
    }
  },
});

export const { setTasks, removeTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;