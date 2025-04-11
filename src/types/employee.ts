
export type Employee = 
{
  id: number;
  surname: string; 
  firstName: string;
  department: string;
  email: string;
  hireDate: string;
  phoneNumber: string;
  photo: string;
}

export function isEmployee(obj: any): obj is Employee {
  return obj && typeof obj.id === "number" 
                    && typeof obj.surname === "string" 
                        && obj.firstName === "string" 
                            && (obj.hireDate === "string" || obj.hireDate === null) ;
}