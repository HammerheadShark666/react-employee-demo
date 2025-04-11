import { setSelectedEmployee, addNewEmployee } from '../employeeSlice';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { useEffect, useRef, useState } from "react";
import { Employee } from "../../../types/employee";
import { fetchEmployees } from "../employeeThunks";
import "../employees-list.css";

const EmployeeList: React.FC = () => {
   
  const [openId, setOpenId] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null); 
  const dispatch = useDispatch<AppDispatch>();
  const { employees, loading, error } = useSelector((state: RootState) => state.employee);

  const handleRowClick = (employee: Employee) => { 
    dispatch(setSelectedEmployee(employee));
  };

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  } 

  return (
    <>  
      <div className="employee-list-header">
      <button type="button" onClick={() => dispatch(addNewEmployee())}>Add New Employee</button>
      </div>
      <table className="employee-list-table">
        <thead>
          <tr> 
            <th></th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Contact</th>
            <th>Hire Date</th>
            <th>Actions</th>
          </tr>
      </thead>
      <tbody>
          {employees.map((employee) => {           
            return (
              <tr key={employee.id} onClick={() => handleRowClick(employee)}>
                <td><img src={`/${employee.photo}`} alt={`${employee.firstName} ${employee.surname}`} className="circle-img" /></td>
                <td>{employee.id}</td>
                <td>{employee.firstName} {employee.surname}</td>
                <td>{employee.department}</td>
                <td><div><div className="employee-phone-number">{employee.phoneNumber}</div><div className="employee-email"><a href={`mailto:${employee.email}`}>{employee.email}</a></div></div></td>
                <td>{employee.hireDate}</td> 
                <td className={`row ${openId === employee.id ? 'active' : ''}`}> 
                  <div className="employee-list-actions-menu-container">  
                    <button onClick={() => setOpenId(openId === employee.id ? null : employee.id)} className="employee-list-actions-menu-button">
                      ⋮
                    </button>
                    {openId === employee.id && (
                      <div ref={menuRef} className="employee-list-actions-menu">
                        <div className="employee-list-actions-menu-item" onClick={() => alert("Edit " + employee.id)}>Edit</div>
                        <div className="employee-list-actions-menu-item" onClick={() => alert("Delete " + employee.id)}>Delete</div>
                      </div>
                    )}
                  </div>
                </td> 
              </tr>   
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
