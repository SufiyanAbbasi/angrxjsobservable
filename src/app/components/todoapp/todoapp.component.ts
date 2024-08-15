import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ApiResponseModel, ITask, Task } from '../../models/task';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todoapp',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './todoapp.component.html',
  styleUrl: './todoapp.component.css'
})
export class TodoappComponent implements  OnInit{
  apiSrv = inject(ApiService)
  taskObj : Task = new Task();
  taskList: ITask[] = []

  ngOnInit(): void {
    this.loadAllTask();
  }

  loadAllTask(){
    this.apiSrv.getAllTaskList().subscribe((res: ApiResponseModel)=>{
       this.taskList = res.data;
    })
  }
  addTask(){
    this.apiSrv.addNewTask(this.taskObj).subscribe((res: ApiResponseModel)=>{
     if(res.result){
      alert('Task Created !')
      this.loadAllTask();
      this.taskObj = new Task()
     }
    }, error =>{
      alert('api call error')
    })
  }
  onEdit(item: Task){
     this.taskObj = item;
  }
  updateTask(){
    this.apiSrv.updateTask(this.taskObj).subscribe((res: ApiResponseModel)=>{
      if(res.result){
       alert('Task Updated !')
       this.loadAllTask();
       this.taskObj = new Task()
      }
     }, error =>{
       alert('api call error')
     })
  }

  onDelete(id: number){
    const isConfirm = confirm('Are You Sure yu want to delete?');
    if(isConfirm){
      this.apiSrv.deleteTask(id).subscribe((res: ApiResponseModel)=>{
    
        if(res.result){
         alert('Task Deleted !')
         this.loadAllTask();
         this.taskObj = new Task()
        }
       }, error =>{
        alert('api call error')
      });
    }
    }
 
}
