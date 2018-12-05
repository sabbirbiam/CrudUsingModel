export class Human
{
    Id : number;
    Name : string;
    Email : string;
    Gender : string;
    Department : string;
    District? : string;
    BloodGroup? : string;
    Hobby? : string;


    constructor(Id: number, Name : string, Email: string, Gender: string,
         Department:string, District : string, BloodGroup: string, Hobby: string)
         {
             this.Id = Id;
             this.Name = Name;
             this.Email = Email;
             this.Gender = Gender;
             this.Department = Department;
             this.District = District;
             this.BloodGroup = BloodGroup;
             this.Hobby = Hobby;
         }
}