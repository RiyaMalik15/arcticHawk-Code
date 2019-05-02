import { Component, OnInit } from '@angular/core';
import { FCropServiceService } from '../fcrop-service.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  constructor(private service : FCropServiceService) { }

  ngOnInit() {
  }

}
