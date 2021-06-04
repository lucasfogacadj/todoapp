import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from '../models/task.models';

@Injectable({providedIn: 'root'})
export class TaskService {
    private taskUrl = 'http://localhost:8080/api/tasks'
    constructor(private http: HttpClient){}

    getAll(): Observable<Task[]>{
        return this.http.get<Task[]>(this.taskUrl);
    }

    post(task: Task): Observable<Task>{
      return this.http.post<Task>(this.taskUrl, task);
  }

  put(task: Task): Observable<Task>{
    return this.http.put<Task>(this.taskUrl + '/' + task.id , task);
  }

  validaEmail(event: any): Observable<any>{
    return this.http.get<any>(
      "https://apilayer.net/api/check?access_key=f20f7ae318c34b92ee6a685fac758febY&email="+event.data.ID)
  }

  delete(task: Task): Observable<any>{
    return this.http.delete<any>(this.taskUrl + '/' + task.id );
  }

}
