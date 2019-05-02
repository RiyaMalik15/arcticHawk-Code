import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FCropServiceService } from '../fcrop-service.service';
import { Customer } from '../model/Customer';
import { Session } from 'selenium-webdriver';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  successMessage:string;
  errorMessage:string;
  customer : Customer;
  loginForm : FormGroup;
  constructor(private fb : FormBuilder, private service : FCropServiceService, private router : Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
    phoneNumber : ['',[Validators.required, Validators.pattern("[0-9]{10}")]],
    password : ['',[Validators.required]]
  })
}
    
  

  loginCustomer(){
    this.successMessage = null;
    this.errorMessage = null;
    this.service.loginEmployee(this.loginForm.value)
    .then(res => {
      this.customer = res;
      sessionStorage.setItem('customer',JSON.stringify(this.customer));
      this.router.navigate(['service',this.customer.customerId]);
      this.service.status=true;
    })
    .catch((err) => {this.errorMessage = err.message
    alert("Login Failed!!")
    })
  }
}
