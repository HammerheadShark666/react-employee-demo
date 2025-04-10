import EmployeeAddUpdate from "../components/EmployeeAddUpdate";
import EmployeeList from "../components/EmployeeList";
import '../employee.module.css'; 

const Employees: React.FC = () => {
    return <>
        <h1>Employees</h1>
        <EmployeeList></EmployeeList>
        <EmployeeAddUpdate></EmployeeAddUpdate>
    </>

};
export default Employees;