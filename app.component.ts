import { Component } from '@angular/core';
import { FCropServiceService } from './fcrop-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FCrop';
  constructor(private service : FCropServiceService){}
}
