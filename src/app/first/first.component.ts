import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  Fname:any;
  Lname:any;
  email:any;
  phoneno:any;
  age:any;
  gender:any;
  country:any;
  fNameError:boolean;
  LnameError:boolean;
  emailError:boolean;
  ageError:boolean;
  phonenoError:boolean;
  genderError:boolean;
  countryError:boolean;
  constructor( private router:Router,private service:MyserviceService) { }

  ngOnInit(): void {
    this.Fname=this.service.getFname();
   this.Lname=  this.service.getLname();
   this.email= this.service.getemail();
   this.phoneno= this.service.getPhoneno();
   this.gender= this.service.getGender();
   this.age=this.service.getage();
   this.country= this.service.getCountry();
  }

  clickBTN(){
    console.log(":: first name", this.Fname)
    console.log(":: LAST name", this.Lname)
    console.log(":: EMAIL", this.email)
    console.log("::phone no", this.phoneno)
    console.log(":: age", this.age)
    console.log("::gender", this.gender)
    console.log("::country", this.country)
    if(this.Fname === '' || this.Fname === undefined) {
      this.fNameError = true;
    }
    if(this.Lname=== ''|| this.Lname=== undefined){
      this.LnameError=true;
    }
    if(this.email==="" || this.email=== undefined){
      this.emailError=true;
    }if(this.age==="" || this.age=== undefined){
      this.ageError=true
    }
    if(this.phoneno==="" || this.phoneno=== undefined){
      this.phonenoError=true;
    }
    if(this.gender==="" || this.gender=== undefined){
      this.genderError=true;
    }if(this.country=== ""|| this.country===undefined){
      this.countryError=true;
    }  else{
      this.router.navigate(["second"])
    }


    this.Fname=this.service.setFname(this.Fname);
    this.Lname=this.service.setLname(this.Lname);
    this.email=this.service.setemail(this.email);
    this.phoneno=this.service.setPhoneno(this.phoneno);
    this.age=this.service.setage(this.age);
    this.gender=this.service.setGender(this.gender)
    this.country=this.service.setCountry(this.country);


    // this.router.navigate(["second"])
  }

}
