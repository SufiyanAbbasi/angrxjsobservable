import { Component } from '@angular/core';
import { Subscription, map, of, tap } from 'rxjs';
@Component({
  selector: 'app-operators',
  standalone: true,
  imports: [],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css'
})
export class OperatorsComponent {
  private mySubscription!: Subscription;
  ngOnInit() {
    of(1, 2, 3) 
      .pipe (
        tap((x) => console.log(`original value: ${x}`)),
        map((x) => x * x)
      )
      .subscribe((v) => console.log(`value: ${v}`));
  }

  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
    console.clear();

  }
}
