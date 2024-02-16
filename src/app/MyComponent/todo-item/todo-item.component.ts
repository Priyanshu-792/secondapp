import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()
  t!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

constructor(){ }
ngOnInit(): void {

}
onClick(t: Todo){
this.todoDelete.emit(t);
  console.log("onCLick ha been triggered");
}
}
