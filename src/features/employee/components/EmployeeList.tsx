import EmployeeDelete from "./EmployeeDelete";
import { setSelectedEmployee, addNewEmployee } from '../employeeSlice';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { useEffect } from "react";
import { Employee } from "../../../types/employee";
import { fetchEmployees } from "../employeeThunks";

const EmployeeList: React.FC = () => {
    
  const dispatch = useDispatch<AppDispatch>();
  const { employees, loading, error } = useSelector((state: RootState) => state.employee);

  const handleRowClick = (employee: Employee) => { 
    dispatch(setSelectedEmployee(employee));
  };


  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>  
      <button type="button" onClick={() => dispatch(addNewEmployee())}>Add New Employee</button>
      <table>
        <thead>
          <tr> 
            <th>Surname</th>
            <th>First Name</th>
            <th>Date of Birth</th>
            <th></th>
          </tr>
      </thead>
      <tbody>
          {employees.map((employee) => {           
            return (
              <tr key={employee.id} onClick={() => handleRowClick(employee)}>
                <td>{employee.surname}</td>
                <td>{employee.firstName}</td>
                <td>{employee.dateOfBirth}</td>
                <td><EmployeeDelete employeeId={employee.id}></EmployeeDelete></td>
              </tr>   
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
