import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-anatomyobservable',
  standalone: true,
  imports: [],
  templateUrl: './anatomyobservable.component.html',
  styleUrl: './anatomyobservable.component.css'
})
export class AnatomyobservableComponent {
  private mySubscription!: Subscription;

  ngOnInit() {
    //Creating Observable
    const observable = new Observable( (subscriber)=> {
        subscriber.next("Hi")   
    })

    //subscribing Observable
    this.mySubscription = observable.subscribe((x) => console.log(x));

    //executing observable

  }
     //Disposing Observeable
     ngOnDestroy(): void {
      // Unsubscribe from the observable to prevent logging when navigating away
      if (this.mySubscription) {
        this.mySubscription.unsubscribe();
      }
      console.clear();
      
    }
}
