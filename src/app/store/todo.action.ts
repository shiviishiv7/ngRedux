import { createAction, props } from "@ngrx/store";
import { Todo } from "../entity/todo";


export const createTodo = createAction("createTodo", props<{ todo: Todo }>())
export const updateTodo = createAction("updateTodo", props<{ name: string, todo: Todo }>())
export const deleteTodo = createAction("deleteTodo", props<{ name: string }>())