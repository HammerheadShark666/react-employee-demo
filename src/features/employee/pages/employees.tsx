//import EmployeeAddUpdate from "../components/EmployeeAddUpdate";
import EmployeeList from "../components/EmployeeList";
import '../employee.css'; 

const Employees: React.FC = () => {
  return  (  
    <>  
      <div className="employee-container">
        <div className="employee-list"> 
          <EmployeeList></EmployeeList>
        </div>
        {/* <div className="employee-form">
          <h2>Add/Update Employee</h2>
          <EmployeeAddUpdate></EmployeeAddUpdate>
        </div> */}
      </div>
    </>
  )     
};

export default Employees;