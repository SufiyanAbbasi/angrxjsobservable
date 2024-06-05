import { ChangeDetectorRef, Component } from '@angular/core';
import { SubjectsService } from '../../services/subjects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent {
  constructor(private subjectService: SubjectsService){}

  // ngOnInit(){
  //   this.subjectService.exclusive.next(true);
  //   this.cdr.detectChanges();
  // }
  // ngOnDestroy(){
  //   this.subjectService.exclusive.next(false);
  //   this.cdr.detectChanges();
  // }

  ngOnInit() {
    setTimeout(() => {
      this.subjectService.exclusive.next(true);
    }, 0);
  }

  ngOnDestroy() {
    setTimeout(() => {
      this.subjectService.exclusive.next(false);
    }, 0);
  }
}
