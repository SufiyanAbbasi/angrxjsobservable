import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-observable1',
  standalone: true,
  imports: [], 
  templateUrl: './observable1.component.html',
  styleUrl: './observable1.component.css'
})

export class Observable1Component {
  ngOnInit(): void {
    this.myObs();
  }

  private mySubscription!: Subscription;
  
  myObs() {
    const observable   = new Observable((subscriber) => {
      subscriber.next(1)
      subscriber.next(2)
      subscriber.next(3)
      setTimeout(() => {
        subscriber.next(4)
        subscriber.complete()
      }, 1000)
    })

    console.log("just before subscribe ");

    //observer
 this.mySubscription=   observable.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.log('something wrong occurred: ' + err);

      },
      complete() {
        console.log("done");

      }
    })
    console.log("Just after subscribe");
  }


  ngOnDestroy(): void {
    // Unsubscribe from the observable to prevent logging when navigating away
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
    console.clear();
    
  }

  //Disposing Observeable


}
