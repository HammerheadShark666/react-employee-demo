import EmployeeAddUpdate from "../components/EmployeeAddUpdate";
import EmployeeList from "../components/EmployeeList";
import '../employee.module.css'; 

const Employees: React.FC = () => {
  return  (      
    <div className="card">    
      <div className="card-content">
        <h1>Employees</h1>
        <div className="employee-container">
          <div className="employee-list"> 
            <EmployeeList></EmployeeList>
          </div>
          <div className="employee-form">
            <h2>Add/Update Employee</h2>
            <EmployeeAddUpdate></EmployeeAddUpdate>
          </div>
        </div>
      </div>
    </div>
  )     
};

export default Employees;