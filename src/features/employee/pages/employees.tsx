import EmployeeList from "../components/EmployeeList"; 
import styles from "../css/Employee.module.css";

const Employees: React.FC = () => {
  return  (  
    <>   
      <div className={styles["employee-container"]}>
        <div className={styles["employee-list"]}> 
          <EmployeeList></EmployeeList>
        </div>       
      </div>
    </>
  )     
};

export default Employees;