import { Component, OnInit } from '@angular/core';
import { FCropServiceService } from '../fcrop-service.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {

  constructor(private service : FCropServiceService) { }

  ngOnInit() {
  }

}
