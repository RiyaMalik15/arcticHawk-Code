import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer : Customer;
  constructor() { }

  ngOnInit() {
    this.customer = JSON.parse(sessionStorage.getItem("customer"));
  }
}
