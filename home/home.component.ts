import { Component, OnInit } from '@angular/core';
import { FCropServiceService } from '../fcrop-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : FCropServiceService) { }

  ngOnInit() {
  }

}
