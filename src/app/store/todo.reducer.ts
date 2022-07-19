import { createReducer, on } from "@ngrx/store";
import { Todo } from "../entity/todo";
import { createTodo, deleteTodo, updateTodo } from "./todo.action";
export interface AppState {
    todos: Todo[]
}

export const initialState: AppState = {
    todos: []
}
export const todoReducer = createReducer(initialState,
    on(createTodo, (state, action) => {
        let updateTodo = Object.assign([], state.todos)
        updateTodo.push(action.todo);
        return {
            ...state,
            todos: updateTodo
        }
    }),
    on(updateTodo, (state, action) => {
        let updateTodo = state.todos.filter((todo) => todo.name != action.name)
        updateTodo.push(action.todo)
        return {
            ...state,
            todos: updateTodo
        }
    }),
    on(deleteTodo, (state, action) => {
        let updateTodo = state.todos.filter((todo) => todo.name != action.name)
        return {
            ...state,
            todos: updateTodo
        }
    })
)