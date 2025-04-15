import { createAsyncThunk } from '@reduxjs/toolkit'; 
import axios from '../../api/axiosInstance';
import { Department } from '../../types/department';

export const fetchDepartments = createAsyncThunk<Department[], void>('departments/fetchDepartments',
  async () => {
    const response = await axios.get('/departments', {
      headers: { 
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  }
);