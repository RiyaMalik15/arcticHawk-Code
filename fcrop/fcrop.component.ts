import { Component, OnInit } from '@angular/core';
import { FCropServiceService } from '../fcrop-service.service';

@Component({
  selector: 'app-fcrop',
  templateUrl: './fcrop.component.html',
  styleUrls: ['./fcrop.component.css']
})
export class FcropComponent implements OnInit {

  constructor(private service : FCropServiceService) { }

  ngOnInit() {
  }

}
