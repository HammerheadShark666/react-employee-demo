import { createAsyncThunk } from '@reduxjs/toolkit';
import { Employee } from '../../types/employee';
import axios from '../../api/axiosInstance';

export const fetchEmployees = createAsyncThunk<Employee[], void>('employees/fetchEmployees',
  async () => {
    const response = await axios.get('/employees', {
      headers: { 
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  }
);

type ApiResponse = {
  employees: Employee[]
  page: number
  totalPages: number
  totalEmployees: number
}
 
export const searchEmployeeRecords = createAsyncThunk<ApiResponse, { keyword: string; page: number, pageSize: number }>
  ('search/searchRecords', async ({ keyword, page, pageSize }) => {
    const response = await axios.get(`/employees/search?keyword=${keyword}&page=${page}&pageSize=${pageSize}`)
  return response.data;
})
   
export const addEmployee = createAsyncThunk('employee/addEmployee',
  async (employee: Employee, { rejectWithValue }) => {
  
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      
      const response = await axios.post( '/employees/add', employee, config);      
      return response.data; 

    } catch (error: any) { 
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

export const updateEmployee = createAsyncThunk('employee/updateEmployee',
  async (employee: Employee, { rejectWithValue }) => {
  
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      
      const response = await axios.put( '/employees', employee, config);      
      return response.data; 

    } catch (error: any) { 
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

export const deleteEmployee = createAsyncThunk('employees/deleteEmployee',
  async (employeeId: number, { rejectWithValue }) => {

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      
      const response = await axios.delete(
        '/employees/' + employeeId,
        config 
      );
      
      return response.data; 
    } catch (error: any) { 
      return rejectWithValue(error.response.data || error.message);
    }
  }
);