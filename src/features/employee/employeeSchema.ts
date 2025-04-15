import { z } from "zod"; 

export const employeeSchema = z.object({
  surname: z.string().min(1, { message: 'Surname is required' }).max(25, { message: 'Surname must be less than 25 characters' }),
  firstName: z.string().min(1, { message: 'First name is required' }).max(25, { message: 'First name must be less than 25 characters' }), 
  dateOfBirth: z
    .string() 
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Please enter a valid date of birth",
    })
    .optional(),
  hireDate: z
    .string() 
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Please enter a valid hire date",
    })
    .optional(),  
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .optional(),
  department: z
   .number()
}); 
 
export type EmployeeSchema = z.infer<typeof employeeSchema>;