import React, { useEffect } from "react"; //, useState
import { useAppDispatch } from "../../../app/hooks"; 
import { Employee } from "../../../types/employee";
import { RootState } from "../../../app/store";
import { useSelector } from "react-redux";
import { addEmployee, updateEmployee } from "../employeeThunks";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { employeeSchema } from "../employeeSchema";
  
type FormData = z.infer<typeof employeeSchema>;

const EmployeeAddUpdate: React.FC = () => {

  const dispatch = useAppDispatch();

  const { loading, error, selectedEmployee } = useSelector((state: RootState) => state.employee);
 
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(employeeSchema), // Integrating Zod with React Hook Form
  });

 

  const onSubmit = (data: FormData) => {
   
  //    const formattedData = {
  //   ...data,
  //   dob: data.dob.toISOString().split('T')[0], // Convert Date to YYYY-MM-DD format
  // };

    if(selectedEmployee != null) {
      const updatedEmployee: Employee = { 
        id: selectedEmployee.id,
        surname: data.surname.trim(),
        firstName: data.firstName.trim(),
        hireDate: data.dob, //.toDateString()
        department: "",
        email: "",
        phoneNumber: "",
        photo: ""
      };
      dispatch(updateEmployee(updatedEmployee));

      reset();
    }
   else {
      const newEmployee: Employee = {
        id: 0,
        surname: data.surname.trim(),
        firstName: data.firstName.trim(),
        hireDate: data.dob, //.toDateString()
        department: "",
        email: "",
        phoneNumber: "",
        photo: ""
      };

      dispatch(addEmployee(newEmployee));

      reset();
    }
  };
 
  useEffect(() => {
    if(selectedEmployee != null) {
      setValue('surname', selectedEmployee.surname);
      setValue('firstName', selectedEmployee.firstName);
      setValue('dob', selectedEmployee.hireDate); // new Date());
    } else { 
     reset(); // Reset the form when no employee is selected
    }
  }, [selectedEmployee, setValue, reset]); // Add reset to the dependency array
    
  return <>
     
    <h2>Add Employee</h2>

    {loading && <p>Adding employee...</p>}
    {error && <p style={{ color: 'red' }}>Error: {error}</p>}
 
    <form onSubmit={handleSubmit(onSubmit)}>

    <div className="form-container">
      <h1 className="form-title">Form Title</h1>
      <div className="form-row">
        <label htmlFor="surname">Surname:</label>
        <input
          {...register('surname')}
          name="surname"
          placeholder="Surname..."
          id="surname"
        />
        {errors.surname && <span>{errors.surname.message}</span>}
      </div>
      <div className="form-row">
        <label htmlFor="firstName">First Name:</label>
        <input
          {...register('firstName')}
          placeholder="First name ..."
          id="firstName"
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>
      <div className="form-row">
        <label htmlFor="dob">Date of birth:</label>
        <input
          {...register('dob')}
          placeholder="Date of birth..."
          type="date"
          id="dob"
        />
        {errors.dob && <span>{errors.dob.message}</span>}
      </div>
      <div className="form-row">
        <button type="submit">{ selectedEmployee == null ? "Add Employee" : "Update Employee"  }</button>
      </div>
    </div>  
    </form>
  </>
};

export default EmployeeAddUpdate;