import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateTodoComponent } from "./create-todo/create-todo.component";
import { DetailTodoComponent } from "./detail-todo/detail-todo.component";
import { ListTodoComponent } from "./list-todo/list-todo.component";
import { UpdateTodoComponent } from "./update-todo/update-todo.component";


export const routes: Routes = [
    { path: '', component: ListTodoComponent, pathMatch: 'full' },
    { path: 'todos', component: ListTodoComponent, pathMatch: 'full' },
    { path: 'create', component: CreateTodoComponent, pathMatch: 'full' },
    { path: 'update/:name', component: UpdateTodoComponent, pathMatch: 'full' },
    { path: 'detail/:name', component: DetailTodoComponent, pathMatch: 'full' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }