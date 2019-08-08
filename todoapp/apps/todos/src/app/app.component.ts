import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Todo } from '@todoapp/data';

@Component({
  selector: 'todoapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [{title: 'Todo1'}, {title: 'Todo2'}];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe(t => (this.todos = t));
  }

  addTodo() {
    this.todos.push({
      title: `Random ${Math.floor(Math.random() * 100)}`
    })
  }
}
