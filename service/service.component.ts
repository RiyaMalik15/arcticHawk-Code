import { Component, OnInit } from '@angular/core';
import { FCropServiceService } from '../fcrop-service.service';
import { Router } from '@angular/router';
import { ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private service : FCropServiceService, private router : Router,private route : ActivatedRoute) {
  
   }

  predictionstatus : boolean = true;
  cid:number;
  ngOnInit() {
    this.route.paramMap
    .subscribe( (params: ParamMap) =>{
     this.cid= parseInt(params.get('id'))
    });
  }

  logout()
  {
    if(confirm("Are You Sure You Want To Exit "))
    {
      sessionStorage.setItem("customer",null);
      this.service.status=false;
      this.router.navigate(['../'])

    }
  }

change(){
  this.predictionstatus = false;
}

  same(){
    this.router.navigate(['../service',this.cid])
  }
}
