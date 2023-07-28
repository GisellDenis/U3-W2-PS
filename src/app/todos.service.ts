import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  editing?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = [];
  nextId = 1;

  constructor() {}

  getTodos() {
    return this.todos.filter(todo => !todo.completed);
  }

  getCompletedTodos() {
    return this.todos.filter(todo => todo.completed);
  }

  addTodo(title: string) {
    const newTodo: Todo = {
      id: this.nextId++,
      title,
      completed: false
    };
    this.todos.push(newTodo);
  }

  completeTodo(todo: Todo) {
    const index = this.todos.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      this.todos[index].completed = true;
    }
  }

  editTodo(todo: Todo) {
    const index = this.todos.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      this.todos[index] = todo;
    }
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

}
