import { setSelectedEmployee } from '../employeeSlice';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { useEffect, useRef, useState } from "react";
import { Employee } from "../../../types/employee";
import { searchEmployeeRecords } from "../employeeThunks";
import styles from "../css/Employees-list.module.css"; 
import EmployeeListHeader from './EmployeeListHeader';

const EmployeeList: React.FC = () => {
   
  const [openId, setOpenId] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null); 
  const dispatch = useDispatch<AppDispatch>();
  // const { employees, loading, error } = useSelector((state: RootState) => state.employee);
  const { employees, page, totalPages, loading, keyword, error } = useSelector((state: RootState) => state.employeeSearch)

  const handleRowClick = (employee: Employee) => { 
    dispatch(setSelectedEmployee(employee));
  };

  const handlePrev = () => {
    if (page > 1) dispatch(searchEmployeeRecords({ keyword, page: page - 1, pageSize: 10 }))
  }

  const handleNext = () => {
    if (page < totalPages) dispatch(searchEmployeeRecords({ keyword, page: page + 1, pageSize: 10 }))
  }

  // useEffect(() => {
  //   dispatch(fetchEmployees());
  // }, [dispatch]);

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
      <EmployeeListHeader></EmployeeListHeader>     
      <table className={styles["employee-list-table"]}>
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
                <td><img src={ employee.photo !== "" ? `/images/employees/${employee.photo}` : "/images/employees/default.png"} 
                        alt={`${employee.firstName} ${employee.surname}`} className={styles["circle-img"]}
                        onError={(e) => {
                          e.currentTarget.src = "/images/employees/default.png";
                        }} /></td>
                <td>{employee.id}</td>
                <td>{employee.firstName} {employee.surname}</td>
                <td>{employee.department}</td>
                <td><div><div className={styles["employee-phone-number"]}>{employee.phoneNumber}</div><div className={styles["employee-email"]}><a href={`mailto:${employee.email}`}>{employee.email}</a></div></div></td>
                <td>{employee.hireDate}</td> 
                <td className={`row ${openId === employee.id ? 'active' : ''}`}> 
                  <div className={styles["employee-list-actions-menu-container"]}>  
                    <button onClick={() => setOpenId(openId === employee.id ? null : employee.id)} className={styles["employee-list-actions-menu-button"]}>
                      ⋮
                    </button>
                    {openId === employee.id && (
                      <div ref={menuRef} className={styles["employee-list-actions-menu"]}>
                        <div className={styles["employee-list-actions-menu-item"]} onClick={() => alert("Edit " + employee.id)}>Edit</div>
                        <div className={styles["employee-list-actions-menu-item"]} onClick={() => alert("Delete " + employee.id)}>Delete</div>
                      </div>
                    )}
                  </div>
                </td> 
              </tr>   
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
          >
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
    </>
  );
};

export default EmployeeList;