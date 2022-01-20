import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { mainModule } from 'process';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regsForm= new FormGroup({
    mails:new FormControl(""),
    pass: new FormControl("")

  })
  get mails(){
    return this.regsForm.get('mails')
  }
  get pass(){
    return this.regsForm.get('pass')
  }
  regs(){
    console.log();
    localStorage.setItem("regmail",this.mails.value)
    localStorage.setItem("regpass",this.pass.value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
