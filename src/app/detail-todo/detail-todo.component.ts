import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../entity/todo';
import { deleteTodo, updateTodo } from '../store/todo.action';
import { AppState } from '../store/todo.reducer';
import { getTodoByName } from '../store/todo.selectors';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.scss']
})
export class DetailTodoComponent implements OnInit {
  todo: Todo
  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) {

  }

  ngOnInit(): void {
    this.store.select(getTodoByName(this.route.snapshot.params["name"]))
      .subscribe(data => {
        this.todo = Object.assign({}, data)
      })
  }
  updateTodo(name: string) {
    this.todo.status = "COMPLETED "
    this.store.dispatch(updateTodo({ name: name, todo: this.todo }))
    this.router.navigateByUrl("todos")
  }
  deleteTodo(name: string) {
    this.store.dispatch(deleteTodo({ name }))
    this.router.navigateByUrl("todos")
  }
}

