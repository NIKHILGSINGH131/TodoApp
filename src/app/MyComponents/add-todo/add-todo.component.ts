import { Component, EventEmitter, Output } from '@angular/core';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  @Output() todoAdd: EventEmitter<Todos> = new EventEmitter();
 
  title:string
  desc:string
  
  constructor(){

  }

  onSubmit(){
    const todo={
        sno:8,
        title:this.title,
        desc:this.desc,
        active:true
    }
    this.todoAdd.emit(todo)
    console.log("on submit");
  }
}
