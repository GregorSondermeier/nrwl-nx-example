import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "@todoapp/data";

@Component({
  selector: 'todoapp-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() { }

  ngOnInit() {

  }

}
