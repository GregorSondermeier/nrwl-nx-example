import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "@todoapp/data";

@Component({
  selector: 'todoapp-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() { }

  ngOnInit() {

  }

}
