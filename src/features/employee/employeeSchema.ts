import { z } from "zod"; 

export const employeeSchema = z.object({
  surname: z.string().min(1, { message: 'Surname is required' }).max(25, { message: 'Surname must be less than 25 characters' }),
  firstName: z.string().min(1, { message: 'First name is required' }).max(25, { message: 'First name must be less than 25 characters' }),
  // dob: z.string()
  //       .refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid date format' }) // Validate the string format
  //       .transform((val) => new Date(val)) // Convert string to Date object
  //       .pipe( // Use pipe to allow date methods like min
  //         z.date().min(new Date('1925-01-01'), { message: 'Birthdate must be after 1925' })
  //       )

  dob: z
    .string() // Accept the date as string (input type="date" sends a string)
    // .refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid date format' }) // Validate that it's a valid date string
    // .transform((val) => new Date(val)) // Transform the string into a Date object
    // .refine((val) => val >= new Date('1925-01-01'), { message: 'Birthdate must be after 1925' }) 

  //.min(new Date('1925-01-01'), { message: 'Birthdate must be after 1925' }),

   
}); 
 

export type EmployeeSchema = z.infer<typeof employeeSchema>;