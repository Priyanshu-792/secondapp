import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {
    localItem:String;
    
    this.todos = [];
  }

  ngOnInit(): void {
    // You can perform additional initialization logic here if needed
  }

  deleteTodo(todo:Todo)
  {
console.log(todo);
const index = this.todos.indexOf(todo);
this.todos.splice(index, 1);
localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo)
  {
console.log(todo);
this.todos.push(todo);
localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
