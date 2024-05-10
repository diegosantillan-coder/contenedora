import { Routes } from "@angular/router";
import { ListTasksComponent } from "./components/tasks/list-tasks/list-tasks.component";
import { loadRemoteModule } from "@angular-architects/native-federation";
import { HeaderComponent } from "@core/components/header/header.component";

export const TASK_ROUTES: Routes = [
  {
    path: 'task',
    component: ListTasksComponent
  },
  {
    path: 'home',
    loadComponent: () =>
      loadRemoteModule('home', './Component').then((m)=> m.AppComponent)
  },
  {
    path: 'inicio',
    component: HeaderComponent
  }
]
