import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  Fname:any;
  Lname:any;
  email:any;
  phoneno:any;
  age:any;
  gender:any;
  country:any;
  languages:any;
  qwalication:any;
  constructor() { }
  // get set fname
  getFname(){
    return this.Fname;
  }
  setFname(Fname:any){
    return this.Fname=Fname;
  }
    // get set lname
    getLname(){
      return this.Lname;
    }
    setLname(Lname:any){
      return this.Lname=Lname;
    }
      // get set email
  getemail(){
    return this.email;
  }
  setemail(email:any){
    return this.email=email;
  }
     // get set email
     getPhoneno(){
      return this.phoneno;
    }
    setPhoneno(phoneno:any){
      return this.phoneno=phoneno;
    }
     // get set email
     getage(){
      return this.age;
    }
    setage(age:any){
      return this.age=age;
    }
     // get set email
     getGender(){
      return this.gender;
    }
    setGender(gender:any){
      return this.gender=gender;
    }
     // get set email
     getCountry(){
      return this.country;
    }
    setCountry(country:any){
      return this.country=country;
    }
    // get set email
    getLANGUAGES(){
      return this.languages;
    }
    setLANGUAGES(languages:any){
      return this.languages=languages;
    }
    // get set email
    getQwalication(){
      return this.qwalication;
    }
    setQwalication(qwalication:any){
      return this.qwalication=qwalication;
    }
}

