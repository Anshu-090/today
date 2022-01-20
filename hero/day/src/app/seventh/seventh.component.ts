import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import {filter} from 'rxjs/operators';









@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.css']
})
export class SeventhComponent implements OnInit,OnDestroy {
count =0
interval:any
private mySub:Subscription
@Input() userMsg=""
  constructor() {
    console.log('user constructor');
    
   }

  ngOnInit(): void {
    //promises
    const promise= new Promise((resolve)=>{
      console.log("promise is called");
      setTimeout(()=>{
        resolve('data1 from promise');
        resolve('data2 from promise');
        resolve('data3 from promise');
        resolve('data4 from promise');

      },1000)
      
    })

    //listening promises
    promise.then((result)=>{
console.log(result);
});


//observables
const observ= new Observable((sub)=>{
  console.log("data inside observable");
  this.interval=setInterval(()=>{
    sub.next(" data from observable"+this.count++);
    //console.log('data observable', this.count);
    // sub.next("data1 from observable")
    // sub.next("data2 from observable")
    // sub.next("data3 from observable")
    // sub.next("data4 from observable")
  },1000) 
})

// const observ= new Observable((sub)=>{
//   console.log("data inside observable");
//   setInterval(()=>{
//     // sub.next(" data from observable"+this.count++);
//     console.log('data observable', this.count);
//     sub.next("data1 from observable")
//     sub.next("data2 from observable")
//     sub.next("data3 from observable")
//     sub.next("data4 from observable")
//   },1000) 
// })
//listining observable
this.mySub= observ.subscribe((result)=>{
  console.log(result);
  // observable.pipe(filter(data=>data==="data3 from observable"))
  // .subscribe(result=>{console.log(result);
  // })
  
})
  }
  ngOnDestroy(): void {
    console.log("user destroyed");
    this.mySub.unsubscribe()
    
      
  }

}
