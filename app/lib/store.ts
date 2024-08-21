import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { tasksReducer } from "@/app/lib/features/tasks/tasksSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { tasks: tasksReducer },
  })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']