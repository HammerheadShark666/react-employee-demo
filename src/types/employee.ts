
export type Employee = 
{
  id: number;
  surname: string; 
  firstName: string;
  dateOfBirth: string;
}

export function isEmployee(obj: any): obj is Employee {
  return obj && typeof obj.id === "number" 
                    && typeof obj.surname === "string" 
                        && obj.firstName === "string" 
                            && (obj.dob === "string" || obj.dob === null) ;
}