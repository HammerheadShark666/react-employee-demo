import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employee/employeeSlice';
import employeeSearchReducer from '../features/employee/employeeSearchSlice';

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    employeeSearch: employeeSearchReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;