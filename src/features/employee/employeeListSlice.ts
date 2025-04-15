import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchEmployeeRecords } from './employeeThunks';
import { Employee } from '../../types/employee';

interface TableState {
  employees: Employee[];
  totalPages: number;
  totalEmployees: number;
  page: number;
  search: string;
  loading: boolean;
  error: string | null;
}

const initialState: TableState = {
  employees: [],
  totalPages: 0,
  totalEmployees: 0,
  page: 1,
  search: '',
  loading: false,
  error: null,
};
 
const employeeSearchSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      state.page = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchEmployeeRecords.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchEmployeeRecords.fulfilled, (state, action) => {
        state.employees = action.payload.employees;
        state.totalPages = action.payload.totalPages;
        state.totalEmployees = action.payload.totalEmployees;
        state.page = action.payload.page
        state.loading = false;
      })
      .addCase(searchEmployeeRecords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load data';
      });
  },
});

export const { setSearch, setPage } = employeeSearchSlice.actions;
export default employeeSearchSlice.reducer;