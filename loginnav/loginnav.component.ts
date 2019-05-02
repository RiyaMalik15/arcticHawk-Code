import { Component, OnInit } from '@angular/core';
import { FCropServiceService } from '../fcrop-service.service';
import { Router } from '@angular/router';
import { ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loginnav',
  templateUrl: './loginnav.component.html',
  styleUrls: ['./loginnav.component.css']
})
export class LoginnavComponent implements OnInit {

  constructor(private service : FCropServiceService, private router : Router, private route : ActivatedRoute) { }

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

  same(){
    this.router.navigate(['../service',this.cid])
  }

}
