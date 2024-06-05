import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subscription, debounceTime, filter, fromEvent, map, switchMap, tap } from 'rxjs';
import {ajax} from "rxjs/ajax"

@Component({
  selector: 'app-ytvideopractice',
  standalone: true,
  imports: [],
  templateUrl: './ytvideopractice.component.html',
  styleUrl: './ytvideopractice.component.css'
})
export class YtvideopracticeComponent {
  @ViewChild('search', { static: true }) search?: ElementRef<HTMLInputElement>
  mySubscription ?: Subscription;
  users:any =[]

  ngOnInit() {

    const searchObs = fromEvent(this.search!.nativeElement, "input")
      .pipe(
        debounceTime(1000),
        filter((e:any)=> e.target.value != ""),
        switchMap((e: any) => {
         return ajax(`https://api.github.com/search/users?q=${e.target.value}`)
        }),
        map((ajaxResponse:any)=>{
            return  ajaxResponse.response.items
        })
      )
   this.mySubscription = searchObs.subscribe((value: any) => {
      console.log(value);
      this.users = value

    })



    //observable --> who emits data
    const pizzaObservable = new Observable((subscriber) => {
      subscriber.next({ name: "Form House", veg: true, size: "small" })
      subscriber.next({ name: "Margreta", veg: true, size: "large" })
      subscriber.next({ name: "Barbecue Chicken", veg: false, size: "medium" })
      subscriber.complete()
    }).pipe(
      tap((pizza: any) => {
        //sideeffets
        // if (pizza.size == "large") {
        //   throw new Error("large size pizza are not available")
        // }
      }),
      filter((pizza: any) => {
        return pizza.veg == true;
      }),
      map((pizza: any) => {
        return pizza.name;
      })
    )

    //Observer --> who consumes the emitted data
    //observer by object method
    // pizzaObservable.subscribe({
    //   next: (value) => console.log(value),
    //   error: (err) => console.log(err.message),
    //   complete: () => console.log("He is Done")
    // })
    // //observer by function - same work like method
    // pizzaObservable.subscribe(
    //   (value) => console.log(value),
    //   (err) => console.log(err.message),
    //   () => console.log("He is Done")
    // )


  }
  
  ngOnDestroy(){
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
    console.clear();
    
  }
}
