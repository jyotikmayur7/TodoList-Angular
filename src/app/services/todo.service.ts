import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

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
