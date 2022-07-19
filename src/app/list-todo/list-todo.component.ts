import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../entity/todo';
import { deleteTodo } from '../store/todo.action';
import { AppState } from '../store/todo.reducer';
import { getAllTodo } from '../store/todo.selectors';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  todo$: Observable<Todo[]>
  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.todo$ = this.store.select(getAllTodo)
  }
  createTodo() {
    this.router.navigateByUrl("create")
  }
  detailTodo(name: string) {
    this.router.navigate(["detail", name])
  }
  updateTodo(name: string) {
    this.router.navigate(["update", name])
  }
  deleteTodo(name: string) {
    this.store.dispatch(deleteTodo({ name }))

  }
}
