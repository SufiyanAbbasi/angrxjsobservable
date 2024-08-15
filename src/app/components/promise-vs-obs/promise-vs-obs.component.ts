import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise-vs-obs',
  standalone: true,
  imports: [],
  templateUrl: './promise-vs-obs.component.html',
  styleUrl: './promise-vs-obs.component.css'
})
export class PromiseVsObsComponent implements OnInit {



  ngOnInit() {
    this.myPro();
    this.myObs();
  }
  //promise

  myPro() {
    const promise = new Promise((resolve, reject) => {
      console.log('promise called');
      //emit one value
      resolve(100)
    })

    promise.then((data) => {
      console.log(data);

    });
  }

  //observable
  myObs() {
    const obs$ = new Observable((subscriber) => {
      //emit multiple value
      subscriber.next('Hello from Observable');
      subscriber.next('Hello from Observable 2');
      subscriber.next('Hello from Observable 3');
      subscriber.complete();
    });
    obs$.subscribe((x) => {
      console.log(x);
    });
  }
}
