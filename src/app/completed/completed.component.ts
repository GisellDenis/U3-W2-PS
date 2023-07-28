import { Component } from '@angular/core';
import { TodosService, Todo } from '../todos.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {
  completedTodos: Todo[] = [];
  loading = true;
  faTimes = faTimes;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    setTimeout(() => {
      this.completedTodos = this.todosService.getCompletedTodos();
      this.loading = false;
    }, 2000);
  }

  deleteTodo(todo: Todo) {
    this.todosService.deleteTodo(todo);
    this.completedTodos = this.todosService.getCompletedTodos();
  }
}
