import {Component, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Todo } from '@todoapp/data';
import {Subscription} from "rxjs";

@Component({
  selector: 'todoapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private subscription: Subscription;

  todos: Todo[] = [
    {
      title: 'Todo1'
    },
    {
      title: 'Todo2'
    }
  ];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

  fetch() {
    this.subscription = this.http
      .get<Todo[]>('/api/todos')
      .subscribe(t => (this.todos = t));
  }

  addTodo() {
    this.http
      .post('/api/todos/add', {})
      .subscribe(t => {
        this.fetch();
      });
  }
}
