import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employee/employeeSlice';
import employeeListReducer from '../features/employee/employeeListSlice';
import departmentReducer from '../features/department/departmentSlice';

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    employeeList: employeeListReducer,
    department: departmentReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;