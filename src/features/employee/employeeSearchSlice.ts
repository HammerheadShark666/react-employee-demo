import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Employee } from "../../types/employee"
import { searchEmployeeRecords } from "./employeeThunks"

// type ApiResponse = {
//     data: Employee[]
//     page: number
//     totalPages: number
//   }

type PagedTableState = {
    keyword: string
    employees: Employee[]
    loading: boolean
    page: number
    totalPages: number
    error?: string
  }

const initialState: PagedTableState = {
    keyword: '',
    employees: [],
    loading: false,
    page: 1,
    totalPages: 1,
  }

export const employeeSearchSlice = createSlice({
    name: 'pagedTable',
    initialState,
    reducers: {
        setKeyword(state, action: PayloadAction<string>) {
          state.keyword = action.payload
        },
      },
      extraReducers: builder => {
        builder
          .addCase(searchEmployeeRecords.pending, state => {
            state.loading = true
            state.error = undefined
          })
          .addCase(searchEmployeeRecords.fulfilled, (state, action) => {
            state.loading = false
            state.employees = action.payload.data
            state.page = action.payload.page
            state.totalPages = action.payload.totalPages
          })
          .addCase(searchEmployeeRecords.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
          })
      },
  })
  
  export const { setKeyword } = employeeSearchSlice.actions
  export default employeeSearchSlice.reducer