import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseModel} from "../models/responseModel";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) { }

  public getAllTasks(): Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(`http://localhost:8000/tasks`);
  }

}
