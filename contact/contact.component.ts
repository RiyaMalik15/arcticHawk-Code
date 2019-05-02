import { Component, OnInit } from '@angular/core';
import { FCropServiceService } from '../fcrop-service.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  errorMessage:string;
  queryid : number;
  queryForm : FormGroup;
  constructor(private service : FCropServiceService, private fb : FormBuilder, private router : Router) { }

  ngOnInit() {
    this.queryForm = this.fb.group({
      name : ['',[Validators.required]],
      lname : ['',[Validators.required]],
      phoneNumber : ['',[Validators.required, Validators.pattern("[0-9]{10}")]],
      message : ['',[Validators.required]]
    })
  }

  addQuery(){
    this.errorMessage=null;
    this.queryid=null;
    this.service.addQuery(this.queryForm.value)
    .then(res => {
      this.queryid = res.mid;
      alert("Thanks!! Your query has been recieved...");
      alert(this.queryid+" <-- is your Query Id. Till then sign up");
      this.router.navigate(['signup']);
    })
    .catch((err) => {this.errorMessage = err.message
      alert("Failed.. Try again!!")
      })
  }

}
