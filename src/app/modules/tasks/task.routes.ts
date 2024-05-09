import { Routes } from "@angular/router";
import { ListTasksComponent } from "./components/tasks/list-tasks/list-tasks.component";

export const TASK_ROUTES: Routes = [
  {
    path: 'task',
    component: ListTasksComponent
  },
]
