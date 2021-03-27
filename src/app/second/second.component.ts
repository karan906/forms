import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  Fname:any;
  Lname:any;
  email:any;
  phoneno:any;
  age:any;
  gender:any;
  country:any;
  constructor(private service:MyserviceService,private router:Router) { }

  ngOnInit(): void {
    this.Fname=this.service.getFname();
    this.Lname=  this.service.getLname();
    this.email= this.service.getemail();
    this.phoneno= this.service.getPhoneno();
    this.gender= this.service.getGender();
    this.age=this.service.getage();
    this.country= this.service.getCountry();
  }
  backPage(){
    console.log(":: click back button");
    this.router.navigate([""])
  }
}
