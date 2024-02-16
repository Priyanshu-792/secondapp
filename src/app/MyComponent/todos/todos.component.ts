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
    this.todos = [
      {
        sno: 1,
       title: "This is title",
        desc: "Description for the title 1",
        active: true
      },
      {
        sno: 2,
       title: "This is title2",
        desc: "Description for the title 2",
        active: true
      },
      {
        sno: 3,
       title: "This is title3",
        desc: "Description for the title 3",
        active: true
      },
    ];
  }

  ngOnInit(): void {
    // You can perform additional initialization logic here if needed
  }

  deleteTodo(todo:Todo)
  {
console.log(todo);
const index = this.todos.indexOf(todo);
this.todos.splice(index, 1);
  }
}
