
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./todo.reducer";


export const appState = createFeatureSelector<AppState>('todo')


export const getTodoByName = (name: string) =>
    createSelector(appState, (state) => {
        return state.todos.find(todo => todo.name == name)
    });
export const getAllTodo = createSelector(appState, (state) => {
    return state.todos
})