import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  regmail=localStorage.getItem("regmail")
  regpass=localStorage.getItem("regpass")
  logmail=localStorage.getItem("logmail")
  logpass=localStorage.getItem("logpass")
  verify(){
    if(this.regmail===this.logmail && 
      this.regpass===this.logpass)
      {return true

    }else{
      return false
    }
  }
  constructor() { }
}
