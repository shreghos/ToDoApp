import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'sb-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  addComEventMsg = "";
  displayTodoList = true;
  displayButton = true;

  lastTodo: Todo = {
    id: 2,
    name: 'Learn Redux',
    status: 'N',
    priority: 'M'
  }
  todos: Todo[] = [{
    id: 1,
    name: 'Learn Angular',
    status: 'N',
    priority: 'H'
  },
{
  id: 2,
  name: 'Learn Redux',
  status: 'N',
  priority: 'M'
}]
  constructor() { }
  ngOnInit() {
  }

  handleRemoveTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  onRemoveAll() {
    this.todos = [];
  }

  handleCopyTodo(todo: Todo){
    const newToDo = { 
      id: this.lastTodo.id+1,
      name: todo.name,
      priority: todo.priority,
      status: todo.status
    }
    //todo.id= this.lastTodo.id + 1;
    this.todos.push(newToDo);
    this.lastTodo = newToDo;
  }

  handleAddToDo(todo: Todo){
    //alert("inside handleAddToDo");

    const newToDo = { 
      id: this.lastTodo.id+1,
      name: "Learn Node JS",
      priority: "H",
      status: "N"
    }

    this.todos.push(newToDo);
    this.lastTodo = newToDo;
  }

  onAddClick() {
    this.displayTodoList = false;
    this.displayButton = false;
  }

  handleSaveTodo(msg: string) {
     //todo.id = this.lastTodo.id + 1;
     //alert(todo.id);
     //this.todos.push(todo);

    this.displayTodoList = true;
    this.addComEventMsg = msg;
    this.displayButton = true;
  }

  handleCancelTodo(msg: string) {
    this.displayTodoList = true;
    this.addComEventMsg = msg; 
    this.displayButton = true;   
  }
  
}
