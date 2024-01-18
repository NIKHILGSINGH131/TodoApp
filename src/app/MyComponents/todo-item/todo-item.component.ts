import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Todos } from '../../Todos';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo:Todos
  @Input() i:number
  @Output() todoDelete: EventEmitter<Todos> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todos> = new EventEmitter();

  onClick(todo :Todos){
    this.todoDelete.emit(todo);
    console.log("on click has been triggred");
  }

  onCheckboxClick(todo:Todos){
    this.todoCheckbox.emit(todo);
  }


}
