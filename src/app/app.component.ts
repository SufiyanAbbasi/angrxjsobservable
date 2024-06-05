import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterEvent, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SubjectsService } from './services/subjects.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxjs';
  constructor(private subjectService: SubjectsService){}
  exclusive: boolean = false;
 
  ngOnInit(){
    this.subjectService.exclusive.subscribe(res=>{
      this.exclusive = res;
    })
  }
}
