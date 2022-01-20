import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  onSubmit(form:NgForm){
    console.log(form);
}
  // loginForm=new FormGroup({
  //   uemail:new FormControl("",[Validators.required,Validators.minLength(8)]),
  //   upass: new FormControl("",[Validators.required,Validators.minLength(10)]  ),
  //   ufname:new FormControl("",[Validators.required,Validators.minLength(10)]),
  //   ulname:new FormControl("",[Validators.required,Validators.minLength(10)]),
  //   unum:new FormControl("",[Validators.required,Validators.minLength(10)]),

  // })
    

  // get uemail(){
  //   return this.loginForm.get('uemail')
  // }
  // get upass(){
  //   return this.loginForm.get('upass')
  // }
  // get ufname(){
  //   return this.loginForm.get('ufname')
  // }
  //   get ulname(){
  //     return this.loginForm.get('ulname')
  //   }
  //     get unum(){
  //       return this.loginForm.get('unum')
  //     }
  // login(){
  //   console.log(this.loginForm);
    
  //  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
