import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return [
      {
        id: 1,
        title: 'Task One',
        completed: false,
      },
      {
        id: 2,
        title: 'Task Two',
        completed: true,
      },
      {
        id: 3,
        title: 'Task Three',
        completed: false,
      },
    ];
  }
}
