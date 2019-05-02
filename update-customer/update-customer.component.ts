import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FCropServiceService} from '../fcrop-service.service';
import { Customer } from '../model/Customer';
import { DatePipe, Location } from '@angular/common';
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customer : Customer;
  errorMessage: string;
  successMessage : string;
  updateForm : FormGroup;
  constructor(private fb : FormBuilder, private service : FCropServiceService,private loc:Location) { }

  ngOnInit() {
    this.updateForm = this.fb.group({
      name : ['',[Validators.required]],
      dob : ['',[Validators.required]],
      phoneNumber : ['',[Validators.required, Validators.pattern("[0-9]{10}")]]
    })
    this.customer = JSON.parse(sessionStorage.getItem("customer"));
    var datePipe = new DatePipe("en-US");
    this.updateForm.controls.name.setValue(this.customer.name);
    this.updateForm.controls.dob.setValue(datePipe.transform(this.customer.dob,'MM/dd/yyyy'));
    this.updateForm.controls.phoneNumber.setValue(this.customer.phoneNumber);
  }


  updateEmployee(){
    this.customer.name=this.updateForm.controls.name.value;
    this.customer.dob=this.updateForm.controls.dob.value;
    this.customer.phoneNumber=this.updateForm.controls.phoneNumber.value;

    this.service.updateCustomer(this.customer)
    .then(res => {
      this.customer = res;
      sessionStorage.setItem("customer",JSON.stringify(this.customer));
      this.loc.back();
    })
    .catch(err=>this.errorMessage=err.message);
  }
}