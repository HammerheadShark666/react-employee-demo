import { addNewEmployee } from '../employeeSlice';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import styles from "../css/Employee-list-header.module.css";
import { Search } from 'lucide-react';

const EmployeeListHeader: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  return (   
    <div className={styles["employee-list-header"]}>
      <div className={styles["toolbar"]}>
        <div className={styles["search-bar"]}>
          <input type="text" placeholder="Search..." />
          <button><Search /></button>
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