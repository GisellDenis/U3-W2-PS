import { Component } from '@angular/core';
import { TodosService, Todo } from '../todos.service';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodoTitle = '';
  faCheckCircle = faCheckCircle;
  faTimes = faTimes;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todos = this.todosService.getTodos();
  }

  addTodo() {
    if (this.newTodoTitle) {
      this.todosService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
      this.todos = this.todosService.getTodos();
    }
  }

  completeTodo(todo: Todo) {
    this.todosService.completeTodo(todo);
    this.todos = this.todosService.getTodos();
  }

  editTodo(todo: Todo) {
    if (todo.editing) {
      this.todosService.editTodo(todo);
    }
    todo.editing = !todo.editing;
  }

  deleteTodo(todo: Todo) {
    this.todosService.deleteTodo(todo);
    this.todos = this.todosService.getTodos();
  }
}
