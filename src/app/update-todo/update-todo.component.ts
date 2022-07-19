import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from '../entity/todo';
import { updateTodo } from '../store/todo.action';
import { AppState } from '../store/todo.reducer';
import { getTodoByName } from '../store/todo.selectors';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss']
})
export class UpdateTodoComponent implements OnInit {
  todo: Todo
  constructor(private rotuer: Router, private rotue: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    let name = this.rotue.snapshot.params["name"]
    this.store.select(getTodoByName(name))
      .subscribe(data => {
        this.todo = Object.assign({}, data)
      })
  }
  update_on(name: string) {
    this.store.dispatch(updateTodo({ name: name, todo: this.todo }))
    this.rotuer.navigateByUrl("todos")
  }

}
