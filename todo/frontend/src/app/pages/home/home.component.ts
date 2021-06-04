import { Component } from '@angular/core';
import { TaskService } from 'src/app/shared/services/tasks.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  dataSource: any;
  priority: any[];
  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void{
    this.readAllList();
  }

  readAllList(){
    this.taskService.getAll().subscribe(res => {
      this.dataSource = res;
    })
  }

  asyncValidation = (params) => {
    return this.sendRequest(params.value);
  };

  sendRequest(params) {
    return new Promise((resolve) => {
    this.taskService.validaEmail(params).subscribe(res => {
      resolve(res);
    })
  });
}

onRowInserted(e: any){
  const task = {
    title: e.data.title,
    ownerMail: e.data.ownermail,
    description: e.data.description,
    finished: e.data.finished
  }
  this.taskService.post(task).subscribe(res =>{
    this.readAllList();
  })
}

onRowUpdated(e: any){
  this.taskService.put(e.data).subscribe(res => {
    console.log(res)
    this.readAllList();
  })
}

onRowRemoved(e: any){
  this.taskService.delete(e.data).subscribe(res => {
    console.log(res)
    this.readAllList();
  })
}

}
