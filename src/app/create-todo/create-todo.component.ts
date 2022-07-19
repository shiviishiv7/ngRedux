import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from '../entity/todo';
import { createTodo } from '../store/todo.action';
import { AppState } from '../store/todo.reducer';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  todo: Todo = new Todo()
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    this.store.dispatch(createTodo({ todo: this.todo }))
    this.router.navigateByUrl("todos")
  }

}
