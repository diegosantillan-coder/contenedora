import { Routes } from "@angular/router";
import { ListTasksComponent } from "./components/tasks/list-tasks/list-tasks.component";
import { loadRemoteModule } from "@angular-architects/native-federation";

export const TASK_ROUTES: Routes = [
  {
    path: 'task',
    component: ListTasksComponent
  },
  {
    path: 'home',
    loadComponent: () =>
      loadRemoteModule('home', './Component').then((m)=> m.AppComponent)
  }
]
