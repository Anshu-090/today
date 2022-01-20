import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  users=[
    {name:"robert", city:"dublin",id:101,salary:24000,dob:new Date("2 jul 1989")},
    {name:"robert", city:"london",id:102,salary:25000,dob:new Date("2 jul 1989")},
    {name:"robert", city:"india",id:103,salary:27000,dob:new Date("2 jul 1989")},
    {name:"robert", city:"usa",id:104,salary:23000,dob:new Date("2 jul 1989")}

    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
