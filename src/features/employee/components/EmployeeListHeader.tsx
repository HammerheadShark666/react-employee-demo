import { addNewEmployee } from '../employeeSlice';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import styles from "../css/Employee-list-header.module.css";
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { setKeyword } from '../employeeSearchSlice';

const EmployeeListHeader: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>(); 

  
  //const { employees, page, totalPages, loading, keyword, error } = useSelector((state: RootState) => state.employeeSearch)

  const { page, keyword } = useSelector((state: RootState) => state.employeeSearch)
  const [input, setInput] = useState(keyword)

  useEffect(() => {
    if (keyword) {
      dispatch(searchEmployeeRecords({ keyword, page }))
    }
  }, [dispatch, keyword, page])

  const handleSearch = () => {
    dispatch(setKeyword(input))
    dispatch(searchEmployeeRecords({ keyword: input, page: 1 }))
  }



  return (   
    <div className={styles["employee-list-header"]}>
      <div className={styles["toolbar"]}>
        <div className={styles["search-bar"]}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)} 
          placeholder="Search by surname..."
        />
          <button onClick={() => handleSearch()}><Search /></button>
        </div>
        <div className={styles["toolbar-buttons"]}>
          <button type="button" onClick={() => dispatch(addNewEmployee())}>Add New Employee</button>
          <button type="button">Import Employees</button>
        </div>
      </div>
    </div>   
  );
};

export default EmployeeListHeader;

function searchEmployeeRecords(arg0: { keyword: string; page: number; }): any {
  throw new Error('Function not implemented.');
}
