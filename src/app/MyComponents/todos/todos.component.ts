import { Component } from '@angular/core';
import { Todos } from '../../Todos';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  

  localItem: string | null;
  defaultValue: null;
  todos: Todos[];

  constructor() {
    if (typeof window !== 'undefined') {
      this.localItem = localStorage.getItem("todos");

      if (this.localItem === null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    } else {
      // Handle non-browser environment, e.g., server-side rendering
      this.localItem = null;
      this.todos = [];
    }
  }
  deleteTodo(todo:Todos){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  addTodo(todo:Todos){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos))
    
  }

  toggleTodo(todo:Todos){
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active
    localStorage.setItem("todos",JSON.stringify(this.todos))
   
    
  }

}
