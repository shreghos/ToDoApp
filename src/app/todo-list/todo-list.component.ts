import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';


@Component({
  selector: 'sb-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() inTodos: Todo[];
  @Output() removeClkEvent = new EventEmitter();
  @Output() copyClkEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    //console.log("THE TODOS####", this.inTodos);
  }
  onRemoveTodo(id: number) {
    this.removeClkEvent.emit(id);
  }
  onCopyTodo(todo: Todo){
    this.copyClkEvent.emit(todo);
  }
  
}
