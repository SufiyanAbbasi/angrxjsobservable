import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable2',
  standalone: true,
  imports: [],
  templateUrl: './observable2.component.html',
  styleUrl: './observable2.component.css'
})
export class Observable2Component {
  ngOnInit() {
    this.myobs2();
   }

   
   private mySubscription!: Subscription;

  myobs2() {
    const foo = new Observable((subscribe) => {
      console.log('Hello')
      subscribe.next(42)
      subscribe.next(100)
      subscribe.next(200)
      setTimeout(() => {
        subscribe.next(300)
      }, 1000)
    })

    console.log('before');
    foo.subscribe((x) => {
      console.log(x);
    })
    console.log('after');
  }

  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
    console.clear();
    
  }

}
