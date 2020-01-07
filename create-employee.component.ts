import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormBuilder , Validators } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  msg: string='';
  employeeForm: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      passWord: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      hobbies: ['', Validators.required],
      age: ['', Validators.required]

    });
  }

  onSubmit(){;
    var empObj =this.employeeForm.value; 
    console.log(this.employeeForm.value);
    if(empObj.firstName == ''){
      this.msg="Enter First Name";
return false
    }
if(empObj.lastName == ''){
  this.msg="Enter Last Name";
return false
}
if(empObj.userName == ''){
  this.msg="Enter Username";
return false
}
if(empObj.passWord == ''){
  this.msg="Enter a valid Password";
return false
    }
    if(empObj.gender == ''){
      this.msg="Enter a valid Gender. If you don't represent the above, press: Gender Neutral";
    return false
        }
        if(empObj.email == ''){
          this.msg="Enter a valid Email Address";
        return false
            }
            if(empObj.phone == ''){
              this.msg="Enter a Phone number";
            return false
                }
                if(empObj.address == ''){
                  this.msg="Enter your home address for postal updates!";
                return false
                    }
                    if(empObj.hobbies == ''){
                      this.msg="Enter your hobbies. It can be one or more, so chill.";
                    return false
                        }
                        if(empObj.age == ''){
                          this.msg="You have to tell us your age.";
                        return false
                            }
                            if(empObj.phone == ''){
                              this.msg="Enter a Phone number";
                            return false
                                }
                                this.msg="New Employee Registered.";
    }
  }
