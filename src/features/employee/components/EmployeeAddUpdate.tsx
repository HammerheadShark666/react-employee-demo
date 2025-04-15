import React, { useEffect } from "react"; //, useState
import { useAppDispatch } from "../../../app/hooks"; 
import { Employee } from "../../../types/employee";
import { RootState } from "../../../app/store";
import { useSelector } from "react-redux";
import { addEmployee, updateEmployee } from "../employeeThunks"; 
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { employeeSchema } from "../employeeSchema";
import InputText from "../../../components/InputText";
import InputEmail from "../../../components/InputEmail";
import InputDate from "../../../components/InputDate";
import { useForm } from "react-hook-form";
import InputSelect from "../../../components/InputSelect";
import styles from "../../employee/css/Employee-form.module.css";
  
type FormData = z.infer<typeof employeeSchema>;

interface IProps {
  onClose: () => void;
};

const EmployeeAddUpdate: React.FC<IProps> = ({ onClose }) => {

  const dispatch = useAppDispatch();

  const { loading, error, selectedEmployee } = useSelector((state: RootState) => state.employee);
 
  const { 
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(employeeSchema),
  });

  function populateEmployee(data: FormData, id: number) {

    const employee: Employee = { 
      id: id,
      surname: data.surname.trim(),
      firstName: data.firstName.trim(),
      dateOfBirth: data.dateOfBirth ? data.dateOfBirth : null,
      hireDate:data.hireDate ? data.hireDate : null,
      department: "",
      email: data.email ? data.email : null,
      phoneNumber: "",
      photo: ""
    }

    return employee;
  } 

  const onSubmit = (data: FormData) => {    

    if(selectedEmployee != null)
      dispatch(updateEmployee(populateEmployee(data, selectedEmployee.id)));    
    else
      dispatch(addEmployee(populateEmployee(data, 0)));   

    reset();
  };
 
  useEffect(() => {
    if(selectedEmployee != null) {
      setValue('surname', selectedEmployee.surname);
      setValue('firstName', selectedEmployee.firstName);

      if (selectedEmployee.dateOfBirth)
        setValue('dateOfBirth', selectedEmployee.dateOfBirth);
      
      if (selectedEmployee.hireDate)
        setValue('hireDate', selectedEmployee.hireDate);
      
    } 
    else 
    { 
     reset(); 
    }
  }, [selectedEmployee, setValue, reset]);

  const departments = useSelector((state: RootState) =>
    state.department.departments
  );
    
  return (     
    <div>
      <h2 className={styles["h2"]}>Add Employee</h2>
      {loading && <p>Adding employee...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container"> 
          <InputText name="surname"  control={control}  label="Surname"  error={errors.surname}></InputText>    
          <InputText name="firstName"  control={control}  label="First Name"  error={errors.firstName}></InputText>
          <InputDate name="dateOfBirth"  control={control}  label="Date of birth"  error={errors.dateOfBirth}></InputDate>
          <InputEmail name="email"  control={control}  label="Email"  error={errors.email}></InputEmail>
          <InputDate name="hireDate"  control={control}  label="Hire date"  error={errors.email}></InputDate> 
          <InputSelect name="department"  control={control}  label="Department"  error={errors.department} items={departments} ></InputSelect>
          <div className={styles["button-row"]}>
            <button onClick={onClose}>Close</button>
            <button type="submit">{ selectedEmployee == null ? "Add Employee" : "Update Employee"  }</button>       
          </div>
        </div>  
      </form>    
    </div>    
  )
} 

export default EmployeeAddUpdate;