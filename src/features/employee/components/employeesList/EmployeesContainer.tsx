'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToolBar from './ToolBar';
import Pagination from './Pagination'; 
import { AppDispatch, RootState } from '../../../../app/store';
import { setPage, setSearch } from '../../employeeListSlice';
import { searchEmployeeRecords } from '../../employeeThunks'; 
import EmployeesTable from './EmployeesTable';

const EmployeesContainer = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { employees, total, page, loading, search } = useSelector((state: RootState) => state.employeeList);
  
  const handleSearch = (term: string) => { 
    dispatch(setSearch(term));
    dispatch(searchEmployeeRecords({ page: 1, keyword: term, pageSize: 5 }));
  };

  const handlePageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber));
    dispatch(searchEmployeeRecords({ page: pageNumber, keyword: search, pageSize: 5 }));
  };

  return (
    <div className="p-4">
      <ToolBar onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <EmployeesTable rows={employees} />}
      <Pagination totalPages={total} currentPage={page} onPageChange={handlePageChange} />
    </div>
  );
};

export default EmployeesContainer;