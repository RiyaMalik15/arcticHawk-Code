import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FCropServiceService } from '../fcrop-service.service';
import { FcropValidator } from '../Fcrop-Validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage: string;
  successMessage : string;
  status=false;
  signUpForm: FormGroup;

  districtList:string[];

  constructor(private fb : FormBuilder, private service : FCropServiceService, private router : Router) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      name : ['',[Validators.required,FcropValidator.checkName]],
      phoneNumber : ['',[Validators.required, Validators.pattern("[0-9]{10}")]],
      dob : ['',[Validators.required,FcropValidator.checkDate]],
      state : ['',],
      district : ['', Validators.required],
      gender : [''],
      email : ['',[Validators.email]],
      password: ['',[Validators.required]],
      re_pass : ['',[Validators.required]],
      
    })


    this.service.getDistricts().then(    
      result => {    
      this.districtList = result ;   
  });

  }

  check(){
    if(this.signUpForm.controls.password.value==this.signUpForm.controls.re_pass.value){
      this.status=true;
    }
    else{
      this.status=false;
    }
  }

  addCustomer(){
    this.errorMessage=null;
    this.successMessage=null;
    this.service.addCustomer(this.signUpForm.value).
    then(res => {
    this.successMessage = res.message;
    this.router.navigate(['login']);
  }).
    catch(err => {this.errorMessage = err.message
    alert("error persists!!")})
  }

  
}
