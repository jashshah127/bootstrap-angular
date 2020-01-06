import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormBuilder , Validators } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      userName: new FormControl(),
      passWord: new FormControl(),
      gender: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormControl(),
      hobbies: new FormControl(),
      age: new FormControl()

    });
  }
}