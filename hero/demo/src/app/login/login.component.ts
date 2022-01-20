import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logForm= new FormGroup({
    mails:new FormControl("",[Validators.required]),
    pass: new FormControl("",[Validators.required])

  })
  get mails(){
    return this.logForm.get('mails')
  }
  get pass(){
    return this.logForm.get('pass')
  }
  logs(){
    console.log(this.logForm);

    localStorage.setItem("logmail",this.mails.value)
    localStorage.setItem("logpass",this.pass.value)
    console.log(localStorage.getItem("logmail"));
    console.log(this.mails.value);
    
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
