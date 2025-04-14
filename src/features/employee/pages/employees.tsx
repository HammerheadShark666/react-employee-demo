import EmployeesContainer from "../components/employeesList/EmployeesContainer";
import styles from "../css/Employee.module.css";

const Employees: React.FC = () => {
  return  (  
    <>   
      <div className={styles["employee-container"]}>
        <div className={styles["employee-list"]}> 
          <EmployeesContainer></EmployeesContainer>
        </div>       
      </div>
    </>
  )     
};

export default Employees;